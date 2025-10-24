import { Link } from "@tanstack/react-router";
import { DonutDto, DonutDtoList } from "@/types.ts";
import DonutCard from "@/components/DonutCard.tsx";

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
        <DonutCard key={d.id} donut={d} />
      ))}
    </div>
  );
}
