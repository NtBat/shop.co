import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
      const response = await axios.get("http://localhost:3000/reviews");
      return response.data;
    },
    initialData: [],
  });
}
