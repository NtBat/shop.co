import { QueryClient } from "@tanstack/react-query";

let queryClient: null | QueryClient = null;

export const getQueryClient = (): QueryClient => {
  if (queryClient === null) {
    queryClient = new QueryClient();
    return queryClient;
  }

  return queryClient;
};
