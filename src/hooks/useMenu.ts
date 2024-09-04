import { axiosInstance } from "@lib";
import { useQuery } from "@tanstack/react-query";

type MenuItem = {
  id: string;
  title: string;
  link: string;
};

export function useMenu() {
  return useQuery<MenuItem[]>({
    queryKey: ["menu"],
    queryFn: async () => {
      const response = await axiosInstance.get("/menu");
      return response.data;
    },
  });
}
