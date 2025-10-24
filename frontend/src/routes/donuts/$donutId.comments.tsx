import { createFileRoute } from "@tanstack/react-router";
import { waitFor } from "@/components/utils.ts";

export const Route = createFileRoute("/donuts/$donutId/comments")({
  async beforeLoad(x) {
    console.log("BEFORE LOAD COMMENTS", x.params.donutId);
    await waitFor("before load", 2000);
    console.log("COMMENTS before load ready");
  },
  async loader() {
    console.log("LOADING COMMENTS");
    await waitFor("before load", 2000);
    console.log("COMMENTS LOAD DONE");
    return "";
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/donuts/$donutId/comments"!</div>;
}
