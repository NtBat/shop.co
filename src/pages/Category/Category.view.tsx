import product2 from "@assets/product2.jpg";
import product3 from "@assets/product3.jpg";
import product1 from "@assets/product-item1.jpg";
import { Breadcrumb, ProductItem } from "@components";

const breadcrumbItems = [
  { name: "All", path: "/all" },
  { name: "Category", path: "/category", isCurrently: true },
];

const productItems = [
  {
    id: "1",
    title: "T-shirt with details",
    price: 240,
    priceBefore: 290,
    discountValue: 20,
    imageUrl: product1,
    rating: 4.5,
    link: "/t-shirt",
  },
  {
    id: "2",
    title: "Gradient Graphic T-shirt",
    price: 145,
    imageUrl: product2,
    rating: 3,
    link: "/t-shirt",
  },
  {
    id: "3",
    title: "Black Striped T-shirt",
    price: 120,
    priceBefore: 160,
    discountValue: 30,
    imageUrl: product3,
    rating: 5,
    link: "/t-shirt",
  },
];

export function Category() {
  return (
    <div className="container-custom">
      <div className="space-y-6 border-t border-solid border-gray-200 pt-6">
        <Breadcrumb breadcrumbItems={breadcrumbItems} />

        <div className="flex gap-5">
          <div className="w-80"></div>
          <div className="flex-1 space-y-6">
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold lg:text-2xl">Casual</h1>
              <div>
                <p className="text-sm text-gray-600">
                  Showing 1-10 of 100 Products
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-x-5 gap-y-10">
              {productItems.map((item) => (
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
