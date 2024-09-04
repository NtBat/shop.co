import { Layout } from "./components";
import { Category, Home, Search } from "@pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/category/:category",
        element: <Category />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
