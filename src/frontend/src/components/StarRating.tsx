import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
}

export function StarRating({ rating, size = 14 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={star <= Math.round(rating) ? "fill-current" : ""}
          style={{
            color:
              star <= Math.round(rating)
                ? "oklch(0.68 0.090 68)"
                : "oklch(0.82 0.025 60)",
          }}
        />
      ))}
    </div>
  );
}
