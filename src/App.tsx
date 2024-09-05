import { Layout } from "./components";
import { Category, Home, Product, Search } from "@pages";
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
      {
        path: "/product/:slug",
        element: <Product />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
