import { DonutDto } from "@/types.ts";
import CommentList from "@/components/CommentList.tsx";
import Donut from "@/components/Donut.tsx";

type DonutDetailProps = {
  donut: DonutDto;
};
export default function DonutDetail({ donut }: DonutDetailProps) {
  return (
    <div className={"DonutDetail"}>
      <Donut donut={donut} />

      <CommentList donutId={donut.id} />
    </div>
  );
}
