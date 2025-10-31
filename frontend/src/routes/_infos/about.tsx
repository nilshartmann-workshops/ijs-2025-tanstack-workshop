import { createFileRoute } from "@tanstack/react-router";
import Notes from "@/routes/_infos/-Notes.tsx";

export const Route = createFileRoute("/_infos/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/about"!
      <Notes />
    </div>
  );
}
