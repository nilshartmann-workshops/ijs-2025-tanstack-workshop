import { Outlet, createFileRoute } from "@tanstack/react-router";
import { z } from "zod/v4";
import NavBar from "@/components/NavBar.tsx";

const GlobalSearchParams = z.object({
  favIds: z.string().array().optional(),
});

export const Route = createFileRoute("/donuts")({
  component: RouteComponent,
  validateSearch: GlobalSearchParams,
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
