import { App } from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";

let queryClient: null | QueryClient = null;

const getQueryClient = (): QueryClient => {
  if (queryClient === null) {
    queryClient = new QueryClient();
    return queryClient;
  }

  return queryClient;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={getQueryClient()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>,
);
