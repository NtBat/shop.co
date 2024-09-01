import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
      const response = await axios.get("http://localhost:3000/products");
      return response.data;
    },
    initialData: [],
  });
}
