import { useSuspenseQuery } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";
import { useLikeMutation } from "@/queries.ts";
import LikeButton from "@/components/LikeButton.tsx";

type DonutLikeButtonProps = {
  donutId: string;
  currentLikes: number;

  variant?: "lg" | "sm";
};
export default function DonutLikeButton({
  donutId,
  currentLikes,
  variant = "lg",
}: DonutLikeButtonProps) {
  const mutation = useLikeMutation(donutId);

  const buttonClassName = twMerge(
    "border-brown text-brown hover:bg-sprinkleBlue font-caveat flex items-center justify-center space-x-2 rounded-2xl border bg-slate-50 px-3 py-1 hover:cursor-pointer hover:text-white",
    variant === "lg" ? "text-2xl" : "text-base",
    mutation.isPending && "animate-pulse",
  );

  const textClassName = twMerge(variant === "lg" ? "text-2xl" : "text-base");

  const handleClick = () => mutation.mutate();

  return (
    <button type={"submit"} className={buttonClassName} onClick={handleClick}>
      <span className={textClassName}>{currentLikes}</span>
      <i className="fa-regular fa-heart mr-2"></i>
    </button>
  );
}
