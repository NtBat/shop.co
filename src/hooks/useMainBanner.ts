import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Banner {
  id: string;
  imageUrl: string;
  imageUrlMobile: string;
  title: string;
}

export function useMainBanner() {
  return useQuery<Banner[]>({
    queryKey: ["mainBanner"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/main-banner");
      return response.data;
    },
    initialData: [],
  });
}
