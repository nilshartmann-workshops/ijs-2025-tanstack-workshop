import _ky, { HTTPError } from "ky";
import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import { notFound } from "@tanstack/react-router";
import { DonutCommentDtoList, DonutDto, DonutDtoList } from "@/types";

const ky = _ky.extend({
  retry: 0,
  timeout: 5000,
});

const fetchSingleDonut = createServerFn({ method: "GET" })
  .inputValidator((x) => {
    if (typeof x !== "string") {
      throw new Error("Please specify donutId");
    }
    return x;
  })
  .handler(async ({ data: donutId }) => {
    let result;

    try {
      result = await ky
        .get("http://localhost:7200/api/donuts/" + donutId + "?slow=100")
        .json();
    } catch (err) {
      if (err instanceof HTTPError && err.response?.status === 404) {
        throw notFound({
          data: "XXXXX",
        });
      }
      throw err;
    }
    return DonutDto.parse(result);
  });

export const fetchDonutDetailOpts = (donutId: string) => {
  return queryOptions({
    queryKey: ["donuts", "details", donutId],
    async queryFn() {
      return fetchSingleDonut({ data: donutId });
    },
  });
  // todo:
  //  queryOptions
  //    Daten von http://localhost:7200/api/donuts/${donutId} laden
  //  Rückgabe-Typ 'any' entfernen
};

export const fetchCommentsOpts = (donutId: string) =>
  queryOptions({
    queryKey: ["donuts", "detail", donutId, "comments"],
    async queryFn() {
      const r = await ky
        .get(`http://localhost:7200/api/donuts/${donutId}/comments?slow=2400`)
        .json();
      return DonutCommentDtoList.parse(r);
    },
  });

export const fetchDonutListOpts = (orderBy: "" | "name" | "likes" = "") =>
  queryOptions({
    queryKey: ["donuts", "list", { orderBy }],
    async queryFn() {
      const r = await ky
        .get(
          "http://localhost:7200/api/donuts?orderBy=" + orderBy + "&slow=100",
        )
        .json();
      return DonutDtoList.parse(r);
    },
  });

export const useLikeMutation = (donutId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    async mutationFn() {
      const response = await ky
        .put(`http://localhost:7200/api/donuts/${donutId}/likes?slow=4`)
        .json();
      return DonutDto.parse(response);
    },
    onSuccess(newValue) {
      // queryClient.invalidateQueries({
      //   queryKey: fetchDonutDetailOpts(donutId).queryKey,
      // });
      queryClient.setQueryData(
        fetchDonutDetailOpts(donutId).queryKey,
        (currentValue) => {
          return newValue;
        },
      );

      // Wann wird dieser Query ausgeführt?
      // wenn wir auf der Detail-Seite stehen und "Liken"
      queryClient.invalidateQueries({
        queryKey: fetchDonutListOpts().queryKey.slice(0, 2),
        exact: false,
      });
    },
  });
};
