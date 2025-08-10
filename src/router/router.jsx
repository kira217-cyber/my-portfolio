import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/Projects/ProjectDetails";
import Dashboard from "../layouts/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        path: "projectDetails/:id",
        Component: ProjectDetails, // Assuming you want to show Home in Dashboard as well
      },
      
    ]
  }
]);
