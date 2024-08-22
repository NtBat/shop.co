import { Badge, StarsRating } from "@components";
import { Link } from "react-router-dom";

type ProductItemProps = {
  link: string;
  title: string;
  priceBefore?: number;
  discountValue?: number;
  price: number;
  imageUrl: string;
  rating: number;
};

export function ProductItem({
  link,
  title,
  priceBefore,
  discountValue = 0,
  price,
  imageUrl,
  rating = 0,
}: ProductItemProps) {
  return (
    <Link to={link} className="transition-all duration-300 hover:scale-[0.95]">
      <img
        className="h-auto w-full rounded-2xl"
        src={imageUrl}
        alt={title}
        loading="lazy"
      />
      <h2 className="mt-4 line-clamp-2 h-10 text-sm font-semibold">{title}</h2>
      <div className="mt-2">
        <StarsRating rating={rating} />
      </div>
      <div className="mt-2 flex gap-2">
        <span className="text-lg font-semibold">${price}</span>

        {priceBefore ? (
          <>
            <span className="text-lg font-semibold text-gray-500 line-through">
              ${priceBefore}
            </span>
            <Badge discountValue={discountValue} />
          </>
        ) : null}
      </div>
    </Link>
  );
}
