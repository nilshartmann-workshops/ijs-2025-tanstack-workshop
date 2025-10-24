import { Link, createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { z } from "zod";
import { fetchDonutListOpts } from "@/queries.ts";
import DonutList from "@/components/DonutList.tsx";
import FavList from "@/components/FavList.tsx";
import DonutListFetchingIndicator from "@/components/DonutListFetchingIndicator.tsx";

const DonutListSearchParams = z.object({
  orderBy: z.enum(["name", "likes"]).optional(),
});

export const Route = createFileRoute("/donuts/")({
  component: DonutListRouteComponent,
  validateSearch: DonutListSearchParams,
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
  const { orderBy } = Route.useSearch();
  const { data: donuts, isFetching } = useSuspenseQuery(
    fetchDonutListOpts(orderBy),
  );

  return (
    <div>
      <div className={"OrderButtons"}>
        <Link
          to={"/donuts"}
          search={{
            orderBy: "name",
          }}
        >
          Name
        </Link>
        <Link
          to={"/donuts"}
          search={{
            orderBy: "likes",
          }}
        >
          Likes
        </Link>
      </div>

      <div className={"relative"}>
        <DonutList donuts={donuts} />
        {isFetching && <DonutListFetchingIndicator />}
      </div>
    </div>
  );
}
