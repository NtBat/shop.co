import { Button, Footer, ProductItem, Reviews, Title } from "@components";
import {
  useBrands,
  useCategoriesBanner,
  useMainBanner,
  useProducts,
  useReviews,
} from "@hooks";
import { Link } from "react-router-dom";

export function Home() {
  const productsQuery = useProducts();
  const reviewsQuery = useReviews();
  const brandsQuery = useBrands();
  const mainBannerQuery = useMainBanner();
  const categoriesBannerQuery = useCategoriesBanner();

  if (
    productsQuery.isLoading ||
    reviewsQuery.isLoading ||
    brandsQuery.isLoading ||
    mainBannerQuery.isLoading ||
    categoriesBannerQuery.isLoading
  )
    return <h1>Loading....</h1>;
  return (
    <>
      <Link to="/">
        <picture>
          <source
            srcSet={mainBannerQuery.data[0]?.imageUrlMobile}
            media="(max-width: 767px)"
            data-testid="picture-source"
          />
          <img
            src={mainBannerQuery.data[0]?.imageUrl}
            className="h-auto w-full"
            alt={mainBannerQuery.data[0]?.title}
          />
        </picture>
      </Link>

      <div className="bg-black py-10">
        <div className="container-custom">
          <div className="flex items-center justify-between gap-4 overflow-auto">
            {brandsQuery.data.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="flex min-w-56 justify-center lg:min-w-0">
                <img src={item.imageUrl} alt={item.title} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-20">
        <div className="container-custom space-y-12">
          <div className="text-center">
            <Title text="New Arrivals" />
          </div>

          <div className="flex grid-cols-4 gap-3 overflow-auto lg:grid lg:gap-5">
            {productsQuery.data.map((item) => (
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

          <Link to="/all" className="mx-auto flex w-56">
            <Button color="outline">View All</Button>
          </Link>
        </div>
      </div>

      <div className="mt-10 lg:mt-20">
        <div className="container-custom">
          <div className="rounded-3xl bg-gray-100 p-4 lg:p-16">
            <div className="text-center">
              <Title text="Browse By dress Style" />
            </div>
            <div className="mt-5 grid gap-3 lg:mt-16 lg:grid-cols-2 lg:gap-5">
              {categoriesBannerQuery.data.map((item) => (
                <Link to="/" key={item.id}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-auto w-full rounded-3xl"
                    loading="lazy"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-20">
        <div className="container-custom">
          <Reviews items={reviewsQuery.data} />
        </div>
      </div>

      <Footer />
    </>
  );
}
