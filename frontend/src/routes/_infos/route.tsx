import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_infos")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={"rounded-lg border-2 border-pink-800 p-4"}>
      <Outlet />
    </div>
  );
}
