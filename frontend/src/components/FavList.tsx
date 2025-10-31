import { Suspense } from "react";
import FavDonut from "@/components/FavDonut.tsx";
import FavDonutFallback from "@/components/FavDonutFallback.tsx";

type FavListProps = {
  favIds?: string[];
};
export default function FavList({ favIds }: FavListProps) {
  return (
    <div className={"FavList"}>
      <h2>My favs</h2>

      {favIds?.map((id) => (
        <div key={id}>
          <Suspense fallback={<FavDonutFallback />}>
            <FavDonut donutId={id} />
          </Suspense>
        </div>
      ))}
    </div>
  );
}
