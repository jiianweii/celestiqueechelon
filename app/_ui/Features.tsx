import Text from "../_components/Text";
import Penthouse from "@/public/suites/penthouse.jpg";
import Studio from "@/public/suites/studio.jpeg";
import Presidential from "@/public/suites/presidential.png";
import Deluxe from "@/public/suites/deluxe.jpg";
import Image from "next/image";
import Button from "../_components/Button";

export default function Features() {
  return (
    <div className="flex flex-col h-dvh relative items-center justify-center bg-gray-800">
      <Text styling="text-[1.2rem]">Discover Our Features</Text>
      <Text styling="text-[2rem] font-bold">
        A Stellar Selection of Suites, Perfectly Tailored to Your Desires.
      </Text>
      <div className="flex gap-4 mt-3.5">
        <div className="h-[400px] group w-[300px] relative">
          <Image
            src={Deluxe}
            fill
            className="object-cover object-top"
            alt="Deluxe"
          />
          <div className="hidden group-hover:block w-[100%] bg-black opacity-70">
            About Deluxe...
          </div>
        </div>
        <div className="h-[400px] group w-[300px] relative">
          <Image
            src={Studio}
            fill
            className="object-cover object-top"
            alt="Studio"
          />
          <div className="hidden group-hover:block w-[100%] bg-black opacity-70">
            About Studio...
          </div>
        </div>
        <div className="h-[400px] group w-[300px] relative">
          <Image
            src={Penthouse}
            fill
            className="object-cover object-top"
            alt="Penthouse"
          />
          <div className="hidden group-hover:block w-[100%] bg-black opacity-70">
            About Penthouse...
          </div>
        </div>
        <div className="h-[400px] group w-[300px] relative">
          <Image
            src={Presidential}
            fill
            className="object-cover object-top"
            alt="Presidential"
          />
          <div className="hidden group-hover:block w-[100%] bg-black opacity-70">
            About Presidential...
          </div>
        </div>
      </div>
      <Button
        href="/suites"
        styling="w-fit px-12 py-1 text-[1.5rem] border border-2 border-white mt-8"
      >
        See All Suites
      </Button>
    </div>
  );
}
