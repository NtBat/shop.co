import { App } from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@utils";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={getQueryClient()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>,
);
