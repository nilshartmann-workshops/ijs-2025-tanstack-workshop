import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchDonutDetailOpts } from "@/queries.ts";
import LikeButton from "@/components/LikeButton.tsx";
import FavButton from "@/components/FavButton.tsx";
import DonutLikeButton from "@/components/DonutLikeButton.tsx";

type FavDonutProps = {
  donutId: string;
};
export default function FavDonut({ donutId }: FavDonutProps) {
  // todo:
  const { data: donut } = useSuspenseQuery(fetchDonutDetailOpts(donutId));
  // console.log("⚠️  ‼️   useSuspenseQuery in FavDonut ergänzen!");
  // const donut: any = {};

  return (
    <div
      className={
        "border-sprinkleBlue bg-sprinkleWhite text-dough shadow-sprinkleBlue group flex flex-row items-center justify-center space-x-2 rounded-2xl border-2 px-2 py-4"
      }
    >
      <img
        className={"size-8 rounded-t-lg object-cover"}
        src={`/images/${donut.image}`}
      />
      <h2 className={"font-caveat text-2xl"}>{donut.name}</h2>
      <div className={"flex items-center justify-between gap-x-2"} />
      <DonutLikeButton donutId={donut.id} currentLikes={donut.likes} />
    </div>
  );
}

export function FavDonutFallback() {
  return (
    <div
      className={
        "border-sprinkleBlue bg-sprinkleWhite text-dough shadow-sprinkleBlue group flex animate-pulse flex-row items-center justify-center space-x-2 rounded-2xl border-2 px-2 py-8"
      }
    ></div>
  );
}
