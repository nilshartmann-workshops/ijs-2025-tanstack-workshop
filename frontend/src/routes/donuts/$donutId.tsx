import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchCommentsOpts, fetchDonutDetails } from "@/queries.ts";
import DonutDetail from "@/components/DonutDetail.tsx";
import LoadingIndicator from "@/components/LoadingIndicator.tsx";

export const Route = createFileRoute("/donuts/$donutId")({
  async loader({ params, context }) {
    context.queryClient.ensureQueryData(fetchCommentsOpts(params.donutId));

    return context.queryClient.ensureQueryData(
      fetchDonutDetails(params.donutId),
    );
  },
  head({ params, loaderData }) {
    return {
      meta: [
        {
          title: loaderData?.name + " Donutigram",
        },
      ],
    };
  },
  component: RouteComponent,
  pendingComponent: LoadingIndicator,
  notFoundComponent() {
    const params = Route.useParams();
    return <h1>Sorry, Donut {params.donutId} could not be found!</h1>;
  },
});

function RouteComponent() {
  const { donutId } = Route.useParams();
  const { data: donut } = useSuspenseQuery(fetchDonutDetails(donutId));
  return <DonutDetail donut={donut} />;
}
