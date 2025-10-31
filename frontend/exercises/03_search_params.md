# Exercise: Typesafe search params with TanStack Router

# Task

- Make the donut list sortable using an `orderBy` search param

# Steps

1. Define the search params for the `/donuts` route using zod
    - The zod object (`DonutListSearchParams`) for the route's search params must have exactly one property with an enum allowing `orderBy` to be either `name`, `likes` or `undefined`
      - `orderBy: z.enum(["name", "likes"]).optional()`
    - Use `DonutListSearchParams` for `validateSearch` on your route object
2. Enhance the `fetchDonutListOpts` query options factory function
    - the function should take `orderBy` as an argument.
    - the new signature looks like this:
      - `export const fetchDonutListOpts = (orderBy: "name" | "likes" | "" = "") => ...`
   - Add order by to your `queryKey`:
       - `queryKey: ["donuts", "list", { orderBy }],`
    - Add the specified `orderBy` as a search parameter to your Backend API call:
      - `"http://localhost:7200/api/donuts?orderBy=" + orderBy`
3. In the `/donuts` RouteComponent add Links to set the search order:
    - One `Link` that sets `orderBy` to `name` and one Link that sets it to `likes`
4. In the `donuts` RouteComponent read the current `orderBy` search param and pass it to your query function
    - Use `Route.useSearch` to access the route's search params
    - You can pass the value from the `orderBy` search param as it is to your `fetchDonutListOpts` function
    - When clicking on the links the order of the donuts now should change!
5. When navigating in your app, your `orderBy` search params gets erased from the URL
    - Add the `retainSearchParams` middleware to the `__root` route configuration:
    - ```typescript
      export const Route = createRootRouteWithContext<MyRouterContext>()({
        // ...
        search: {
          middlewares: [retainSearchParams(true)],
        },
      })
      ```
# Material

- Search Params in TanStack Router: https://tanstack.com/router/v1/docs/framework/react/guide/search-params
  - Reading Search Params in components using `useSearch`: https://tanstack.com/router/v1/docs/framework/react/guide/search-params#search-params-in-components 
  - Links with Search Params: https://tanstack.com/router/v1/docs/framework/react/guide/search-params#link-search-
  - Search Middlewares: https://tanstack.com/router/latest/docs/framework/react/guide/search-params#transforming-search-with-search-middlewares
    - `retainSearchParams` middleware: https://tanstack.com/router/latest/docs/framework/react/api/router/retainSearchParamsFunction#retainsearchparams-props 
