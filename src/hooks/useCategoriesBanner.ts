import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface CategoryBanner {
  id: string;
  title: string;
  imageUrl: string;
}

export function useCategoriesBanner() {
  return useQuery<CategoryBanner[]>({
    queryKey: ["categoriesBanner"],
    queryFn: async () => {
      const response = await axios.get(
        "http://localhost:3000/categories-banner",
      );
      return response.data;
    },
    initialData: [],
  });
}
