import { StarsRating, Title } from "@components";
import Marquee from "@components/magicui/marquee";

type ReviewsProps = {
  items: {
    id: string;
    name: string;
    text: string;
    rating: number;
  }[];
};

export function Reviews({ items }: ReviewsProps) {
  return (
    <div>
      <div className="text-center">
        <Title text="Our Happy Customers" />
      </div>
      <div className="mt-10">
        <Marquee pauseOnHover className="justify-center [--duration:20s]">
          {items.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="max-w-96 rounded border border-solid border-gray-300 p-5 text-sm">
              <StarsRating rating={item.rating} />
              <div className="mt-3 space-y-3">
                <span className="font-semibold">{item.name}</span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
