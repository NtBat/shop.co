import fullBannerMobile from "@assets/full-banner-mobile.jpg";
import fullBanner from "@assets/full-banner.jpg";
import { Link } from "react-router-dom";

export function Home() {
  return (
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
  );
}
