import { Breadcrumb, Filter, ProductItem } from "@components";
import { useProducts } from "@hooks";
import { Product } from "@types";
import { useState } from "react";

type FilterCriteria = {
  colors: string[];
  sizes: string[];
};

const breadcrumbItems = [
  { name: "All", path: "/all" },
  { name: "Category", path: "/category", isCurrently: true },
];

export function Category() {
  const productsQuery = useProducts();
  const [filters, setFilters] = useState<FilterCriteria>({
    colors: [],
    sizes: [],
  });

  const handleFilterChange = (newFilters: FilterCriteria) => {
    setFilters(newFilters);
  };

  const filteredProducts =
    productsQuery.data?.filter((product: Product) => {
      const matchesColor =
        filters.colors.length === 0 ||
        filters.colors.some((color) => product.color.includes(color));
      const matchesSize =
        filters.sizes.length === 0 ||
        filters.sizes.some((size) => product.size.includes(size));
      return matchesColor && matchesSize;
    }) || [];

  return (
    <div className="container-custom">
      <div className="space-y-6 border-t border-solid border-gray-200 pt-6">
        <Breadcrumb breadcrumbItems={breadcrumbItems} />

        <div className="flex gap-5">
          <div className="w-72">
            <Filter onFilterChange={handleFilterChange} />
          </div>
          <div className="flex-1 space-y-6">
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold lg:text-2xl">Casual</h1>
              <div>
                <p className="text-sm text-gray-600">
                  Showing {filteredProducts.length} of{" "}
                  {productsQuery.data.length} Products
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-x-5 gap-y-10">
              {filteredProducts.map((item) => (
                <div className="min-w-52" key={item.id}>
                  <ProductItem
                    link={item.link}
                    title={item.title}
                    price={item.price}
                    priceBefore={item.priceBefore}
                    discountValue={item.discountValue}
                    imageUrl={item.imageUrl}
                    rating={item.rating}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
