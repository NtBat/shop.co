import { Star, StarHalfIcon } from "lucide-react";

type StarsRatingProps = {
  rating: number;
};

export function StarsRating({ rating }: StarsRatingProps) {
  const validRating = Math.min(Math.max(rating, 0), 5);

  const fullStars = Math.floor(validRating);
  const hasHalfStar = validRating % 1 !== 0;

  return rating > 0 ? (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {Array.from({ length: fullStars }).map((_, index) => (
          <Star key={index} size={20} className="text-yellow-400" />
        ))}
        {hasHalfStar && <StarHalfIcon size={20} className="text-yellow-400" />}
      </div>
      <span className="text-sm">{validRating}/5</span>
    </div>
  ) : null;
}
