import { axiosInstance } from "@lib";
import { useQuery } from "@tanstack/react-query";

type Banner = {
  id: string;
  imageUrl: string;
  imageUrlMobile: string;
  title: string;
};

export function useMainBanner() {
  return useQuery<Banner[]>({
    queryKey: ["mainBanner"],
    queryFn: async () => {
      const response = await axiosInstance.get("/main-banner");
      return response.data;
    },
    initialData: [],
  });
}
