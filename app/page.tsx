import Image from "next/image";
import Button from "./_components/Button";
import Text from "./_components/Text";
import Banner from "./_ui/Banner";
import Penthouse from "@/public/suites/penthouse.jpg";
import Studio from "@/public/suites/studio.jpeg";
import Presidential from "@/public/suites/presidential.png";
import Deluxe from "@/public/suites/deluxe.jpg";
import Casino from "@/public/casino.png";
import Lounge from "@/public/lounge.png";
import Pool from "@/public/pool.png";
import Logo from "@/public/celestiquebg.png";

export default function Home() {
  return (
    <div className="flex flex-col w-[100%]">
      <Banner image={Logo}>
        <Text styling="text-[2rem]">Refined Heights. Celestial Nights.</Text>
        <Text styling="text-[3.8rem] mt-[-18px] font-bold">
          Welcome to Celestique Echelon
        </Text>
        <Button
          href="/reservation"
          styling="w-fit px-12 py-1 text-[1.5rem] border border-2 border-white mt-4"
        >
          Book Now
        </Button>
      </Banner>
      <div className="flex h-dvh items-center justify-center gap-15 bg-gray-900">
        <div className="flex flex-col w-[30%] gap-2.5">
          <Text styling="text-[1.2rem]">Wide Selection of Services</Text>
          <Text styling="text-[3rem] font-bold">Indulgence at Every Turn</Text>
          <Text styling="text-[1rem]">
            At Celestique Echelon, every detail is designed to delight. Whether
            you&apos;re sipping signature cocktails at our sky bar, trying your
            luck in our state-of-the-art casino, relaxing by the luxurious
            pools, or enjoying gourmet dining from around the world—our
            world-class amenities offer something for every mood, taste, and
            moment.
          </Text>
        </div>
        <div className="flex gap-2">
          <div className="h-[500px] w-[200px] bg-sky-300 relative">
            <Image
              src={Casino}
              fill
              className="object-cover object-top"
              alt="Casino"
            />
          </div>
          <div className="h-[500px] w-[200px] bg-sky-300 mt-[-50px] relative">
            <Image
              src={Lounge}
              fill
              className="object-cover object-top"
              alt="Lounge"
            />
          </div>
          <div className="h-[500px] w-[200px] bg-sky-300 relative">
            <Image
              src={Pool}
              fill
              className="object-cover object-top"
              alt="Pool"
            />
          </div>
        </div>
      </div>
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
    </div>
  );
}
