import { Link, createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { z } from "zod";
import { fetchDonutListOpts } from "@/queries.ts";
import DonutList from "@/components/DonutList.tsx";
import FavList from "@/components/FavList.tsx";
import { zodValidator } from "@tanstack/zod-adapter";

const GlobalSearchParams = z.object({
  favIds: z.string().array().optional(),
});

export const Route = createFileRoute("/donuts/")({
  component: RouteComponent,
  validateSearch: zodValidator(GlobalSearchParams),
});

function RouteComponent() {
  const { favIds } = Route.useSearch();

  return (
    <div
      className={
        "container mx-auto my-8 flex items-start justify-center space-x-8"
      }
    >
      <DonutListColumn />

      <FavList favIds={favIds} />
    </div>
  );
}

function DonutListColumn() {
  const { data: donuts } = useSuspenseQuery(fetchDonutListOpts());
  return <DonutList donuts={donuts} />;
}
