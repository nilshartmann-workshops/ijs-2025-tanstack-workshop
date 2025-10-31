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

export const fetchDonutListOpts = () =>
  queryOptions({
    queryKey: ["donuts", "list"],
    async queryFn() {
      const response = await ky.get("http://localhost:7200/api/donuts").json();

      const data = DonutDtoList.parse(response);
      return data;
    },
  });

export const fetchDonutDetails = (donutId: string) =>
  queryOptions({
    queryKey: ["donuts", "details", donutId],
    async queryFn() {
      const response = await ky
        .get("http://localhost:7200/api/donuts/" + donutId)
        .json();
      const data = DonutDto.parse(response);
      return data;
    },
  });
