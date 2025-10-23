import { Outlet, createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import NavBar from "@/components/NavBar.tsx";

const GlobalSearchParams = z.object({
  favIds: z.string().array().optional(),
});

export const Route = createFileRoute("/donuts")({
  component: RouteComponent,
  validateSearch: zodValidator(GlobalSearchParams),
});

function RouteComponent() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <Outlet />
    </>
  );
}
