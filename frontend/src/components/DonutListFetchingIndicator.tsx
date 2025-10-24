export default function DonutListFetchingIndicator() {
  return (
    <div className={"absolute inset-0"}>
      <div className={"flex h-full flex-col"}>
        <div
          className={
            "flex items-center justify-center rounded-xl rounded-b-none bg-rose-400 px-4 py-8 text-4xl"
          }
        >
          🍩 🍩 🍩 Updating 🍩 🍩 🍩
        </div>
        <div
          className={
            "-mb-8 flex-1 flex-grow animate-[pulse_0.9s_ease-in-out_infinite] rounded-b-xl bg-rose-100/60"
          }
        />
      </div>
    </div>
  );
}
