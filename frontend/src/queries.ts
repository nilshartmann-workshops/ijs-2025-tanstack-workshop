import _ky, { HTTPError } from "ky";
import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { createIsomorphicFn, createServerFn } from "@tanstack/react-start";
import { notFound } from "@tanstack/react-router";
import { DonutCommentDtoList, DonutDto, DonutDtoList } from "@/types";

const ky = _ky.extend({
  retry: 0,
  timeout: 5000,
});

export const fetchDonutListOpts = (orderBy: "name" | "likes" | "" = "") =>
  queryOptions({
    queryKey: ["donuts", "list", orderBy],
    staleTime: 10_000,
    async queryFn() {
      const response = await ky
        .get("http://localhost:7200/api/donuts?orderBy=" + orderBy + "&slow=20")
        .json();

      const data = DonutDtoList.parse(response);
      return data;
    },
  });

const logDonutId = createIsomorphicFn()
  .server((donutId: string) => {
    console.log("I'm not the server");
    return "Hello " + donutId + " from server!";
  })
  .client((donutId: string) => {
    console.log("I'm not the client");
    return "Hello " + donutId + " from client!";
  });

const loadDonut = createServerFn({ method: "POST" })
  .inputValidator((data) => {
    if (typeof data !== "string") {
      throw new Error("Nope, no string!");
    }

    return data;
  })
  .handler(async ({ data }) => {
    try {
      const response = await ky
        .get(`http://localhost:7200/api/donuts/${data}?slow=r10`)
        .json();
      return DonutDto.parse(response);
    } catch (err) {
      if (err instanceof HTTPError && err.response?.status === 404) {
        throw notFound();
      }
      throw err;
    }
  });

export const fetchDonutDetails = (donutId: string) =>
  queryOptions({
    queryKey: ["donuts", "details", donutId],
    async queryFn() {
      const logFromIsomorphicFn = logDonutId(donutId);
      console.log("Response from isomorphic fn", logFromIsomorphicFn);
      return loadDonut({
        data: donutId,
      });
    },
  });

export const fetchCommentsOpts = (donutId: string) =>
  queryOptions({
    queryKey: ["donuts", "detail", donutId, "comments"],
    async queryFn() {
      const r = await ky
        .get(`http://localhost:7200/api/donuts/${donutId}/comments?slow=10`)
        .json();
      return DonutCommentDtoList.parse(r);
    },
  });
