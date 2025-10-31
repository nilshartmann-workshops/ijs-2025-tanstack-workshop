import { Link, createFileRoute } from "@tanstack/react-router";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { z } from "zod/v4";
import { Suspense } from "react";
import { fetchDonutListOpts } from "@/queries.ts";
import DonutList from "@/components/DonutList.tsx";
import FavList from "@/components/FavList.tsx";
import LoadingIndicator from "@/components/LoadingIndicator.tsx";
import DonutListFetchingIndicator from "@/components/DonutListFetchingIndicator.tsx";

// type D = {
//   orderBy?: "likes" | "name"
// }

const DonutListSearchParams = z.object({
  orderBy: z.enum(["likes", "name"]).optional(),
});

export const Route = createFileRoute("/donuts/")({
  component: RouteComponent,
  validateSearch: DonutListSearchParams,
  pendingComponent: () => <LoadingIndicator />,
});

function RouteComponent() {
  const { orderBy } = Route.useSearch();

  const { data: donutList, isFetching } = useSuspenseQuery(
    fetchDonutListOpts(orderBy),
  );

  return (
    <div className={"DonutListRouteComponent"}>
      <div className={"OrderButtons"}>
        <Link
          to={"/donuts"}
          search={{
            orderBy: "name",
          }}
        >
          Order by name
        </Link>

        <Link
          to={"/donuts"}
          search={{
            orderBy: "likes",
          }}
        >
          Order by likes
        </Link>
      </div>
      <div className={"relative"}>
        <DonutList donuts={donutList} />
        {isFetching && <DonutListFetchingIndicator />}
      </div>

      <FavList favIds={["1", "2"]} />
    </div>
  );
}
