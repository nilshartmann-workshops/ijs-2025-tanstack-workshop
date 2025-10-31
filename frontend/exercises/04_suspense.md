# Exercise: Add some feedback to our application when things are slow

# Task

- Use Suspense to show visual feedbacks when data is fetched

# Steps

- There are multiple places where we're loading data on the `/donuts` route:
  - Donut List (`/donuts`)
  - "Fav donuts" (`/donuts`)
  - Changing the order of the donut list by clicking the order links

1. Add visual feedback where you think it fits best
    - There is no right or wrong here. It's your individual decision
    - Add feedback at the appropriate places
2. How does placing Suspense boundaries affect the SSR behaviour?
    - Look into the network data and the returned HTML from server

# Material

- React `Suspense` component: https://react.dev/reference/react/Suspense
- Pending components in TanStack Router:
  - https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#showing-a-pending-component
  - `pendingComponent` route option: https://tanstack.com/router/latest/docs/framework/react/api/router/RouteOptionsType#pendingcomponent-property
- Fetching Indicators in TanStack Query: https://tanstack.com/query/latest/docs/framework/react/guides/background-fetching-indicators

