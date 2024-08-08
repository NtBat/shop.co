import { Layout } from "./components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <h1>World</h1>,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
