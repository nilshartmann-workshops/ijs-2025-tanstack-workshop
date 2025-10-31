import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/donuts/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link
        to={"/donuts/$donutId"}
        params={{
          donutId: "1",
        }}
      >
        Donut 1
      </Link>
    </div>
  );
}
