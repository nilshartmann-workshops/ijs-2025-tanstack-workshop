import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

export default function RouteComponent() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* Row 1: Header */}
      <div className="shrink-0">
        <h1>
          <Link
            to="/donuts"
            className="text-sprinkleBlue font-fredoka flex justify-center text-6xl tracking-wider no-underline hover:text-pink-400 hover:underline hover:underline-offset-8 md:text-8xl"
          >
            Donutigram
          </Link>
        </h1>
      </div>

      {/* Row 2: Subtitle */}
      <div className="shrink-0">
        <h2 className="font-caveat text-center text-4xl font-bold text-pink-700 md:text-6xl">
          From devs to donuts ... commit to the hole.
        </h2>
      </div>
      <div className="mt-8 shrink-0">
        <h2 className="font-caveat text-center text-4xl font-bold text-pink-700 md:text-6xl">
          "<span className={"text-brown"}>Donuts</span> is the new{" "}
          <span className={"text-brown"}>Insta</span>" (Mickey Mouse)
        </h2>
      </div>

      {/* Row 3: Donut image as background */}
      <div className="flex min-h-0 flex-grow items-center justify-center overflow-hidden">
        <div className="h-full w-full bg-[url('/images/d-icon.png')] bg-contain bg-center bg-no-repeat" />
      </div>

      {/* Row 4: Footer */}
      <div className="mb-8 shrink-0">
        <h2 className="font-caveat mb-2 text-center text-4xl font-bold text-pink-700 md:text-6xl">
          Built with React, boosted by TanStack 🤤
        </h2>
      </div>
    </div>
  );
}
