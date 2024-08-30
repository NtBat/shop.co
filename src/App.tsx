import { Layout } from "./components";
import { Category, Home } from "@pages";
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
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
