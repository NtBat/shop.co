import { axiosInstance } from "@lib";
import { useQuery } from "@tanstack/react-query";

export function useSearch(query: string) {
  return useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      const response = await axiosInstance.get(`/products?search=${query}`);
      return response.data;
    },
    enabled: !!query,
  });
}
