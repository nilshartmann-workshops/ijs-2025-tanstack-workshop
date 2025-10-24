import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  retainSearchParams,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";

import type { QueryClient } from "@tanstack/react-query";
import DevtoolsPanel from "@/components/DevtoolsPanel.tsx";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Donuitgram",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { href: "/fonts/google-fonts.css", rel: "stylesheet" },
      { href: "/fontawesome/css/fontawesome.css", rel: "stylesheet" },
      { href: "/fontawesome/css/brands.css", rel: "stylesheet" },
      { href: "/fontawesome/css/regular.css", rel: "stylesheet" },
      { href: "/fontawesome/css/solid.css", rel: "stylesheet" },
    ],
  }),

  shellComponent: RootDocument,
  search: {
    middlewares: [retainSearchParams(true)],
  },
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body
        suppressHydrationWarning
        className={
          "bg-glaze-subtle text-brown font-fredoka font-a min-h-screen pb-8"
        }
      >
        {children}
        <DevtoolsPanel />
        <Scripts />
      </body>
    </html>
  );
}
