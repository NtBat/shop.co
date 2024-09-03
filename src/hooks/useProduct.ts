import { axiosInstance } from "@lib";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@types";

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axiosInstance.get("/products");
      return response.data;
    },
    initialData: [],
  });
}
