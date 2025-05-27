import VenueCardSkeleton from "./VenueCardSkeleton";

export default function VenueListSkeleton() {
  return (
    <div className="flex flex-col">
      {[...Array(6)].map((_, i) => (
        <VenueCardSkeleton key={i} />
      ))}
    </div>
  );
}
