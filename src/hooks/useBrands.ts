import { axiosInstance } from "@lib";
import { useQuery } from "@tanstack/react-query";

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
      const response = await axiosInstance.get("/brands");
      return response.data;
    },
    initialData: [],
  });
}
