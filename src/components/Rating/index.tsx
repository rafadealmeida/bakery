import { Star } from '../Star';

export type Rating = 1 | 2 | 3 | 4 | 5;

export const Rating = ({ rating }: { rating: Rating }) => {
  return (
    <div className="flex flex-row gap-2">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} fill={index + 1 <= rating} />
      ))}
    </div>
  );
};
