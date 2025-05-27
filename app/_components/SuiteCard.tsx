import Image from "next/image";
import Text from "./Text";
import Link from "next/link";

interface SuiteCardProps {
  id: number;
  url: string;
  name: string;
  description: string;
}

export default function SuiteCard({
  id,
  url,
  name,
  description,
}: SuiteCardProps) {
  return (
    <div className="flex flex-col w-[500px] bg-gray-500">
      <div className="h-[220px] relative">
        <Image src={url} fill alt={name} className="object-cover" />
      </div>
      <div className="flex flex-col justify-between h-[240px] p-7 text-center">
        <div className="flex flex-col gap-5">
          <Text styling="text-[1.5rem] font-bold">{name}</Text>
          <Text styling="text-[1rem] font-light">{description}</Text>
        </div>
        <div>
          <Link href={`/suites/${id}`} className="text-gray-300 w-max">
            View Suite &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}
