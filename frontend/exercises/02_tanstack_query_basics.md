# Exercise: TanStack Query Basics

# Task

- Load data for the donut list and a single donut

# Steps

1. In your `/donuts`-Route a list of donuts should be displayed
    - Add a `queryOptions` function in `src/queries.ts`
    - You can use `ky` or `fetch` for data fetching
    - The endpoint is `http://locahost:7200/api/donuts`
    - You can verify the result using zod with the `DonutDtoList` type from `src/types.ts`
    - Use a Suspense Query in `/donuts` to load the donut data
    - Render the list using the `DonutList` component (just pass the list of loaded donuts as prop)
2. Load a single donut ("Donut Details") on the `/donuts/$donutId` route
    - Add a `queryOptions` function in `src/queries.ts`. Your factory function needs one argument (`donutId: string`)
    - You can use `ky` or `fetch` for data fetching
    - The endpoint is `http://locahost:7200/api/donuts/DONUT_ID`
    - You can verify the result using zod with the `DonutDto` type from `src/types.ts`
    - Use a Suspense Query in `$donutId` to load the donut data
    - Render the donut using the `DonutDetail` component (just pass the donut data as prop)

# Material

## ky and fetch

You can use either use `ky` (installed as a package in your workspace) or `fetch` to load the data from the "Donut Backend API".
- **ky** library for data fetching: https://github.com/sindresorhus/ky
    - When using `ky` please use the `get` method and its `json` method for parsing the result
    - Do not forget `await` for the response
- `fetch` API:
    - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    - Examples: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Validating the data
- You can use zod to parse and validate the data. The zod types are already defined in our workspace
- Just call `XyzDto.parse` with the json result returned from `ky` or `fetch`
- see: https://zod.dev/basics?id=parsing-data

## TanStack Query
- TanStack Query library: https://tanstack.com/query/latest/docs/framework/react/overview
- Queries with TanStack Query: https://tanstack.com/query/latest/docs/framework/react/guides/queries
- Query Function `queryFn`: https://tanstack.com/query/latest/docs/framework/react/guides/query-functions
- Query Key `queryKey`: https://tanstack.com/query/latest/docs/framework/react/guides/query-keys
- `useSuspenseQuery`: https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseQuery
