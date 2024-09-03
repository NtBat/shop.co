import { axiosInstance } from "@lib";
import { useQuery } from "@tanstack/react-query";

type CategoryBanner = {
  id: string;
  title: string;
  imageUrl: string;
};

export function useCategoriesBanner() {
  return useQuery<CategoryBanner[]>({
    queryKey: ["categoriesBanner"],
    queryFn: async () => {
      const response = await axiosInstance.get("/categories-banner");
      return response.data;
    },
    initialData: [],
  });
}
