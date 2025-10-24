import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";

// custom client entry point to disable strict mode
// https://github.com/TanStack/router/blob/main/packages/react-start/src/default-entry/client.tsx
// https://tanstack.com/start/latest/docs/framework/react/guide/client-entry-point
startTransition(() => {
  console.log("ℹ️ Custom client entry point executed.");
  hydrateRoot(document, <StartClient />);
});
