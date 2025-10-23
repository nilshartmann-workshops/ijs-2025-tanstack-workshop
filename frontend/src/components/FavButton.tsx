import { twMerge } from "tailwind-merge";
import { getRouteApi, useNavigate, useSearch } from "@tanstack/react-router";
import { toggleId } from "@/components/utils.ts";

const Route = getRouteApi("/donuts");

export default function FavButton({
  donutId,
  variant = "lg",
}: {
  donutId: string;
  variant?: "lg" | "sm";
}) {
  const navigate = Route.useNavigate();

  // todo: select from search
  const { favIds = [] } = Route.useSearch();
  const isFav = favIds.includes(donutId);

  const handleFavClick = () => {
    navigate({
      search: {
        favIds: toggleId(favIds, donutId),
      },
    });
  };

  const buttonClassName = twMerge(
    "border-brown text-brown hover:bg-sprinkleBlue font-caveat flex items-center justify-center rounded-2xl border bg-slate-50 px-3 hover:cursor-pointer hover:text-white",
    variant === "lg" ? "py-2 text-2xl" : "px-4 py-2 text-base",
  );

  const textClassName = twMerge(
    isFav ? "fa-solid fa-star" : "fa-regular fa-star",
    variant === "lg" ? "text-2xl" : "text",
  );

  return (
    <button className={buttonClassName} onClick={handleFavClick}>
      <i className={textClassName}></i>
    </button>
  );
}
