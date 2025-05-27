import { getVenues } from "../_utils/helper";
import VenueCard from "./VenueCard";

interface VenueProps {
  id: number;
  name: string;
  maxCapacity: number;
  description: string;
  purposes: string[];
  services: string[];
  image: string;
}

export default async function VenueList() {
  const venues = await getVenues();

  return (
    <div className="flex flex-col">
      {venues.map((venue: VenueProps) => (
        <VenueCard
          key={venue.id}
          name={venue.name}
          description={venue.description}
          purposes={venue.purposes}
          services={venue.services}
          image={venue.image}
          id={venue.id}
        />
      ))}
    </div>
  );
}
