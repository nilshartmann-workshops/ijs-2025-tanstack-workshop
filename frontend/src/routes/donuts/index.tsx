import { Link, createFileRoute } from "@tanstack/react-router";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { z } from "zod/v4";
import { fetchDonutListOpts } from "@/queries.ts";
import DonutList from "@/components/DonutList.tsx";

// type D = {
//   orderBy?: "likes" | "name"
// }

const DonutListSearchParams = z.object({
  orderBy: z.enum(["likes", "name"]).optional(),
});

export const Route = createFileRoute("/donuts/")({
  component: RouteComponent,
  validateSearch: DonutListSearchParams,
});

function RouteComponent() {
  const { orderBy } = Route.useSearch();

  const { data: donutList } = useSuspenseQuery(fetchDonutListOpts(orderBy));

  return (
    <div>
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
      <DonutList donuts={donutList} />
    </div>
  );
}
