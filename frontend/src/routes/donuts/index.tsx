import { Link, createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { z } from "zod";
import { fetchDonutListOpts } from "@/queries.ts";
import DonutList from "@/components/DonutList.tsx";
import FavList from "@/components/FavList.tsx";

export const Route = createFileRoute("/donuts/")({
  component: DonutListRouteComponent,
});

function DonutListRouteComponent() {
  const { favIds } = Route.useSearch();

  return (
    <div className={"DonutListRouteComponent"}>
      <DonutListColumn />

      <FavList favIds={favIds} />
    </div>
  );
}

function DonutListColumn() {
  const { data: donuts } = useSuspenseQuery(fetchDonutListOpts());
  return <DonutList donuts={donuts} />;
}
