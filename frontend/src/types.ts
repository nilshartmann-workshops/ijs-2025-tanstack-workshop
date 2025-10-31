import { z } from "zod/v4";

export const DonutDto = z.object({
  id: z.string(),
  name: z.string().min(4),
  description: z.string(),
  image: z.string(),
  likes: z.number(),
});

export type DonutDto = z.infer<typeof DonutDto>;

export const DonutDtoList = DonutDto.array();
export type DonutDtoList = z.infer<typeof DonutDtoList>;

export const DonutCommentDto = z.object({
  id: z.string(),
  author: z.string(),
  text: z.string(),
});
export type DonutCommentDto = z.infer<typeof DonutCommentDto>;

export const DonutCommentDtoList = DonutCommentDto.array();
export type DonutCommentDtoList = z.infer<typeof DonutCommentDtoList>;
