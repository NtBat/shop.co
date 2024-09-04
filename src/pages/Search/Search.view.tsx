import { Breadcrumb, Filter, ProductItem } from "@components";
import { useSearch } from "@hooks/useSearch";
import { Product } from "@types";
import { useState } from "react";
import { useLocation } from "react-router-dom";

type FilterCriteria = {
  colors: string[];
  sizes: string[];
};

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

export function Search() {
  const queryParams = useQueryParams();
  const query = queryParams.get("q") || "";
  const productsQuery = useSearch(query);
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
        <Breadcrumb
          breadcrumbItems={[
            { name: "Home", path: "/" },
            {
              name: "Search Results",
              path: `/search?q=${query}`,
              isCurrently: true,
            },
          ]}
        />

        <div className="flex gap-5">
          <div className="w-72">
            <Filter onFilterChange={handleFilterChange} />
          </div>
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold lg:text-2xl">
                Search Results for "{query}"
              </h1>
              <div>
                <p className="text-sm text-gray-600">
                  Showing {filteredProducts.length} of{" "}
                  {productsQuery.data?.length || 0} Products
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-x-5 gap-y-10">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item: Product) => (
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
                ))
              ) : (
                <h1>No results found</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
