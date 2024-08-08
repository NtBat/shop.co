import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello</div>,
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
