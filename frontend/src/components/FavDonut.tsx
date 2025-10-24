import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchDonutDetailOpts } from "@/queries.ts";
import LikeButton from "@/components/LikeButton.tsx";
import FavButton from "@/components/FavButton.tsx";
import DonutLikeButton from "@/components/DonutLikeButton.tsx";

type FavDonutProps = {
  donutId: string;
};
export default function FavDonut({ donutId }: FavDonutProps) {
  const { data: donut } = useSuspenseQuery(fetchDonutDetailOpts(donutId));

  return (
    <div className={"FavDonut"}>
      <img src={`/images/${donut.image}`} alt={donut.name} />
      <h2>{donut.name}</h2>
      <DonutLikeButton donutId={donut.id} currentLikes={donut.likes} />
    </div>
  );
}
