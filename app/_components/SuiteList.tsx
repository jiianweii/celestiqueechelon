import { getSuites } from "../_utils/helper";
import SuiteCard from "./SuiteCard";

interface SuiteProps {
  id: number;
  type: string;
  description: string;
  addons: string[];
  highlights: string[];
  services: string[];
  facilities: string[];
  url: string;
}

export default async function SuiteList() {
  const suites = await getSuites();
  return (
    <div className="flex gap-x-10 gap-y-20 flex-wrap justify-center">
      {suites.map((suite: SuiteProps) => (
        <SuiteCard
          name={suite.type}
          description={suite.description}
          url={suite.url}
          key={suite.id}
          id={suite.id}
        />
      ))}
    </div>
  );
}
