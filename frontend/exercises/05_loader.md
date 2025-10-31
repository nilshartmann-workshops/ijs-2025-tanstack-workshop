# Exercise: Complete our donut detail route component

# Task

- Add a loader to speed up loading

# Steps

1. (Preparation) Show comments for a donut on the donut detail page:
  - In `CommentList.tsx` you find the `queryOption` code for the comment.
    - Move the code to `queries.ts`
    - add suspense query in `CommentList` (see comment there)
  - Add `CommentList` component in `DonutDetail.tsx`
    - you'll only have to uncomment the code (see todo there)
2. Make both queries (single donut and comments) slow
    - add `?slow=XXXX` search parameter to api requests in `queries.ts` 
3. Add `loader` function to `/donuts/$donutId` route
    - Use `ensureQueryData` to pre-fetch the queries
4. If you like to, add some more features:
    - `notFoundComponent` in case a route (or a donut) could not be found
    - pre-load donut details
    - write the name of the donut currently shown to the brower title

# Material

- TanStack Router `loader`: https://tanstack.com/router/v1/docs/framework/react/guide/data-loading#route-loaders
- TanStack Query `ensureQueryData`: https://tanstack.com/query/latest/docs/reference/QueryClient#queryclientensurequerydata
- TanStack Router `notFoundComponent`: https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#configuring-a-routes-notfoundcomponent
- TanStack Router preloading data: https://tanstack.com/router/latest/docs/framework/react/guide/preloading
- 


