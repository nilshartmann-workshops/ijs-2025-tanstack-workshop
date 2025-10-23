import { useSuspenseQuery } from "@tanstack/react-query";
import { useLikeMutation } from "@/queries.ts";
import LikeButton from "@/components/LikeButton.tsx";

type DonutLikeButtonProps = {
  donutId: string;
  currentLikes: number;
};
export default function DonutLikeButton({
  donutId,
  currentLikes,
}: DonutLikeButtonProps) {
  // todo: useLikeMutation

  const mutation = useLikeMutation(donutId);

  return (
    <LikeButton currentLikes={currentLikes} onClick={() => mutation.mutate()} />
  );
}
