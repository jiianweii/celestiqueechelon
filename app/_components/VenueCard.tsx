import Link from "next/link";
import Text from "./Text";
import Image from "next/image";

interface VenueCardProps {
  id: number;
  name: string;
  description: string;
  purposes: string[];
  services: string[];
  image: string;
}

export default function VenueCard({
  id,
  name,
  description,
  purposes,
  services,
  image,
}: VenueCardProps) {
  return (
    <div className="flex items-center w-[100%] h-[500px] gap-8">
      <div className="w-[600px] h-[80%] relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="flex w-[100%] flex-col justify-around h-[80%]">
        <Text styling="text-[2rem] font-bold">{name}</Text>
        <Text styling="text-[1.4rem]">{description}</Text>
        <div className="flex gap-12 w-[100%]">
          <div className="flex flex-col w-[100%]">
            <Text styling="font-bold">Purposes</Text>
            <div className="flex flex-wrap gap-x-3.5 gap-y-1.5 mt-[6px]">
              {purposes.map((purpose) => (
                <Text key={purpose}>{purpose}</Text>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-[100%]">
            <Text styling="font-bold">Services</Text>
            <div className="flex flex-wrap gap-x-3.5 gap-y-1.5 mt-[6px]">
              {services.map((service) => (
                <Text key={service}>{service}</Text>
              ))}
            </div>
          </div>
        </div>
        <Link href={`/events/${id}`} className="text-gray-300 w-max">
          View More &gt;
        </Link>
      </div>
    </div>
  );
}
