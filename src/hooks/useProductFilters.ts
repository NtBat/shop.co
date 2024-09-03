import { axiosInstance } from "@lib";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@types";

type ProductFilters = {
  sizes: string[];
  colors: string[];
};

export function useProductFilters() {
  return useQuery({
    queryKey: ["productFilters"],
    queryFn: async (): Promise<ProductFilters> => {
      const response = await axiosInstance.get<Product[]>("/products");
      const products = response.data;

      const sizes = new Set<string>();
      const colors = new Set<string>();

      products.forEach((product) => {
        product.size.forEach((size: string) => sizes.add(size));
        product.color.forEach((color: string) => colors.add(color));
      });

      return {
        sizes: Array.from(sizes),
        colors: Array.from(colors),
      };
    },
  });
}
