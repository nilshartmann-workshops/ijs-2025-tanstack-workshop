import { Link } from "@tanstack/react-router";
import { DonutDto, DonutDtoList } from "@/types.ts";
import LikeButton from "@/components/LikeButton.tsx";
import FavButton from "@/components/FavButton.tsx";
import DonutLikeButton from "@/components/DonutLikeButton.tsx";

type DonutListProps = {
  donuts: DonutDtoList;
};

export default function DonutList({ donuts }: DonutListProps) {
  return (
    <div
      className={
        "container mx-auto flex flex-col items-center justify-center space-y-10"
      }
    >
      <h1 className={"text-4xl tracking-wider text-pink-600"}>
        The only ring worth scrolling for
      </h1>
      {donuts.map((d) => (
        <DonutItem key={d.id} donut={d} />
      ))}
    </div>
  );
}

type DonutDetailProps = {
  donut: DonutDto;
};
function DonutItem({ donut }: DonutDetailProps) {
  return (
    <div className={"DonutItem group flex items-stretch"}>
      <img
        className={
          "max-h-24 transform rounded-2xl rounded-t-lg object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
        }
        src={`/images/${donut.image}`}
      />
      <div className={"flex flex-1 flex-col items-stretch justify-between"}>
        {/* todo: link! */}
        <Link
          to={"/donuts/$donutId"}
          params={{
            donutId: donut.id,
          }}
        >
          <h2 className={"font-caveat text-center text-3xl"}>{donut.name}</h2>
        </Link>
        <div className={"flex items-center justify-between gap-x-8"}>
          <DonutLikeButton donutId={donut.id} currentLikes={donut.likes} />

          <FavButton variant={"sm"} donutId={donut.id} />
        </div>
      </div>
    </div>
  );
}
