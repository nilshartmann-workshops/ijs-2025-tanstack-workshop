import { useSearch } from "@tanstack/react-router";
import { Suspense } from "react";
import FavDonut, { FavDonutFallback } from "@/components/FavDonut.tsx";

type FavListProps = {
  favIds?: string[];
};
export default function FavList({ favIds = [] }: FavListProps) {
  return (
    <div className={"FavList"}>
      <h2>My favs</h2>
      {favIds?.map((id) => (
        <Suspense key={id} fallback={<FavDonutFallback />}>
          <FavDonut donutId={id} />
        </Suspense>
      ))}
    </div>
  );
}
