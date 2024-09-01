import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Brand {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

export function useBrands() {
  return useQuery<Brand[]>({
    queryKey: ["brands"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/brands");
      return response.data;
    },
    initialData: [],
  });
}
