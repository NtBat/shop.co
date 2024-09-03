import { axiosInstance } from "@lib";
import { useQuery } from "@tanstack/react-query";

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export function useReviews() {
  return useQuery<Review[]>({
    queryKey: ["reviews"],
    queryFn: async () => {
      const response = await axiosInstance.get("/reviews");
      return response.data;
    },
    initialData: [],
  });
}
