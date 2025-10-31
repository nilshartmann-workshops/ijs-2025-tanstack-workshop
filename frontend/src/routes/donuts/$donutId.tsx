import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchDonutDetails } from "@/queries.ts";
import DonutDetail from "@/components/DonutDetail.tsx";

export const Route = createFileRoute("/donuts/$donutId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { donutId } = Route.useParams();
  const { data: donut } = useSuspenseQuery(fetchDonutDetails(donutId));
  return <DonutDetail donut={donut} />;
}
