import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import LoadingIndicator from "@/components/LoadingIndicator.tsx";
import { fetchCommentsOpts } from "@/queries.ts";

type CommentListProps = {
  donutId: string;
};
export default function CommentList({ donutId }: CommentListProps) {
  return (
    <div className={"CommentList"}>
      <h1>What the Snackers Say</h1>
      <Suspense fallback={<CommentLoadingIndicator />}>
        <CommentListView cardId={donutId} />
      </Suspense>
    </div>
  );
}

type CommentListViewProps = {
  cardId: string;
};
function CommentListView({ cardId }: CommentListViewProps) {
  const { data: comments } = useSuspenseQuery(fetchCommentsOpts(cardId));

  return comments.map((c) => (
    <div key={c.id} className={"CommentItem"}>
      <p>
        {c.text} <span className={"text-dough"}>({c.author})</span>
      </p>
    </div>
  ));
}

function CommentLoadingIndicator() {
  return <LoadingIndicator>Comments loading...</LoadingIndicator>;
}
