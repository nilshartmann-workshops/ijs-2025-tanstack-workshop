import { twMerge } from "tailwind-merge";

type LikeButtonProps = {
  currentLikes: number;
  onClick?(): void;

  variant?: "lg" | "sm";
};

export default function LikeButton({
  currentLikes,
  onClick,
  variant = "lg",
}: LikeButtonProps) {
  const buttonClassName = twMerge(
    "border-brown text-brown hover:bg-sprinkleBlue font-caveat flex items-center justify-center space-x-2 rounded-2xl border bg-slate-50 px-3 py-1 hover:cursor-pointer hover:text-white",
    variant === "lg" ? "text-2xl" : "text-base",
  );

  const textClassName = twMerge(variant === "lg" ? "text-2xl" : "text-base");

  const handleClick = onClick ? () => onClick() : undefined;

  return (
    <button type={"submit"} className={buttonClassName} onClick={handleClick}>
      <span className={textClassName}>{currentLikes}</span>
      <i className="fa-regular fa-heart mr-2"></i>
    </button>
  );
}
