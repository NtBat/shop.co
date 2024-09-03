import { axiosInstance } from "@lib";
import { useQuery } from "@tanstack/react-query";

export interface Product {
  id: string;
  title: string;
  price: number;
  priceBefore: number;
  discountValue: number;
  imageUrl: string;
  rating: number;
  link: string;
}

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
