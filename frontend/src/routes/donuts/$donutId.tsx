import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/donuts/$donutId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { donutId } = Route.useParams();
  return <div>Hello Donut-Id {donutId}</div>;
}
