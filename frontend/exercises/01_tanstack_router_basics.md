# Exercise: TanStack Router Basics

# Files

### Notes on file-based routing with TanStack Router

- We work in the `routes` directory!
    - All files in the `routes` directory (and below) are interpreted by TanStack Router as route files.
    - To exclude files or directories from route interpretation, choose a name that starts with `-` (`-Title.tsx` or
      `-components/`)
        - (In our workshop, we place components that are not routes in the `src/components` directory, i.e., outside the
          `src/routes` directory)
- When you create a new (route) file in the
  `routes` directory, the router plugin in the Vite dev server automatically generates a configuration for this route in the file.
    - It may take a moment for your IDE/editor to pick up the changes.
    - In IntelliJ, you can reload the created file to ensure the changes made by the plugin are applied. Use the context menu in the Project Explorer and select
      `Reload from disc` (or `File -> Reload all from disc`)
- You can find more information on file-based navigation conventions in the docs: https://tanstack.com/router/v1/docs/framework/react/routing/file-based-routing

# Task

- Build the initial routes for our application
- Define a common layout for `donuts` routes
- Add links to the application

# Steps

- **Note**: in this step we only show fake content. We will add data fetching later. Just focus in the routing basics!

1. Add the `/`-route
    - As `routeComponent` you can render `LandingPage` from `src/components`
2. Complete the app shell
    - Add the `Root` css classname to the `body` element of our application
    - Set a `title` in the head ("Donutigram") for the browser 
3. Add the `donuts`-route
    - Just show "Hello world"
4. Add Link in `LandingPage` to `/donuts`
5. Add a common layout for all routes in `/donuts`
    - In your common layout, render the `NavBar` component
6. Add a dynamic route for a single donut under `/donuts`
    - Show the donut id when the route is rendered
    - Add a Link on the `/donuts` route for one or two single donuts to test your new route
    - (we will replace the links later with "real" donut data and links)
7. Optional: When your single donut route is open, the donut id should be part of the browser tab title

# Material

- TanStack Start fullstack framework: https://tanstack.com/start/latest/docs/framework/react/overview
  - 
- TanStack Router: https://tanstack.com/router/latest/docs/framework/react/overview
    - File-based routing: https://tanstack.com/router/latest/docs/framework/react/routing/file-based-routing
    - Navigation:
        - Links: https://tanstack.com/router/latest/docs/framework/react/guide/navigation#link-component
        - Link Component API: https://tanstack.com/router/latest/docs/framework/react/api/router/linkComponent
    - Dynamic route segments: https://tanstack.com/router/latest/docs/framework/react/routing/routing-concepts#dynamic-route-segments
    - Pathless routes: https://tanstack.com/router/latest/docs/framework/react/routing/routing-concepts#pathless-layout-routes
    - Managing the Document Head: https://tanstack.com/router/latest/docs/framework/react/guide/document-head-management#managing-the-document-head
      - `head`-Method https://tanstack.com/router/latest/docs/framework/react/api/router/RouteOptionsType#head-method