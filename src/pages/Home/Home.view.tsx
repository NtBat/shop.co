import styleCasual from "@assets/banner-style1.jpg";
import styleFormal from "@assets/banner-style2.jpg";
import styleParty from "@assets/banner-style3.jpg";
import styleGym from "@assets/banner-style4.jpg";
import calvinKleinBrand from "@assets/brand-calvin-klein.svg";
import gucciBrand from "@assets/brand-gucci.svg";
import pradaBrand from "@assets/brand-prada.svg";
import versaceBrand from "@assets/brand-versace.svg";
import zaraBrand from "@assets/brand-zara.svg";
import fullBannerMobile from "@assets/full-banner-mobile.jpg";
import fullBanner from "@assets/full-banner.jpg";
import product1 from "@assets/product-item1.jpg";
import { Button, ProductItem, Reviews, Title } from "@components";
import { Link } from "react-router-dom";

const reviewItems = [
  {
    id: "1",
    name: "John Doe",
    text: "Amazing product! Highly recommend to everyone.",
    rating: 5,
  },
  {
    id: "2",
    name: "Jane Smith",
    text: "Good quality, but a bit expensive for what it offers.",
    rating: 4,
  },
];

export function Home() {
  return (
    <>
      <Link to="/">
        <picture>
          <source
            srcSet={fullBannerMobile}
            media="(max-width: 767px)"
            data-testid="picture-source"
          />
          <img
            src={fullBanner}
            className="h-auto w-full"
            alt="Two models, a man and a woman, dressed in stylish black and white casual outfits, posing confidently. The image is part of a fashion advertisement with bold text that reads 'Find Clothes That Matches Your Style'. Below the text, a 'Shop Now' button is visible, followed by promotional statistics like '200+ International Brands', '2,000+ High-Quality Products', and '30,000+ Happy Customers'."
          />
        </picture>
      </Link>

      <div className="bg-black py-10">
        <div className="container-custom">
          <div className="flex items-center justify-between gap-4">
            <Link to="/versace">
              <img src={versaceBrand} alt="Versace logo" />
            </Link>
            <Link to="/zara">
              <img src={zaraBrand} alt="Zara logo" />
            </Link>
            <Link to="/gucci">
              <img src={gucciBrand} alt="Gucci logo" />
            </Link>
            <Link to="/prada">
              <img src={pradaBrand} alt="Prada logo" />
            </Link>
            <Link to="/calvin-klein">
              <img src={calvinKleinBrand} alt="Calvin Klein logo" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="container-custom space-y-12">
          <div className="text-center">
            <Title text="New Arrivals" />
          </div>

          <div className="grid grid-cols-4 gap-5">
            <ProductItem
              link="/t-shirt"
              price={240}
              priceBefore={290}
              discountValue={20}
              title="T-shirt with details"
              imageUrl={product1}
              rating={4.5}
            />
            <ProductItem
              link="/t-shirt"
              price={240}
              priceBefore={290}
              discountValue={20}
              title="T-shirt with details"
              imageUrl={product1}
              rating={3.5}
            />
            <ProductItem
              link="/t-shirt"
              price={240}
              priceBefore={290}
              discountValue={20}
              title="T-shirt with details"
              imageUrl={product1}
              rating={5}
            />
            <ProductItem
              link="/t-shirt"
              price={240}
              priceBefore={290}
              discountValue={20}
              title="T-shirt with details"
              imageUrl={product1}
              rating={0}
            />
          </div>

          <Link to="/all" className="mx-auto flex w-56">
            <Button color="outline">View All</Button>
          </Link>

          <div className="mt-20 rounded-3xl bg-gray-100 px-16 py-16">
            <div className="text-center">
              <Title text="Browse By dress Style" />
            </div>
            <div className="mt-16 grid grid-cols-2 gap-5">
              <Link to="/">
                <img
                  src={styleCasual}
                  alt="Casual"
                  className="h-auto w-full rounded-3xl"
                  loading="lazy"
                />
              </Link>
              <Link to="/">
                <img
                  src={styleFormal}
                  alt="Formal"
                  className="h-auto w-full rounded-3xl"
                  loading="lazy"
                />
              </Link>

              <Link to="/">
                <img
                  src={styleParty}
                  alt="Party"
                  className="h-auto w-full rounded-3xl"
                  loading="lazy"
                />
              </Link>
              <Link to="/">
                <img
                  src={styleGym}
                  alt="Gym"
                  className="h-auto w-full rounded-3xl"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="container-custom">
          <Reviews items={reviewItems} />
        </div>
      </div>
    </>
  );
}
