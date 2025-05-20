import Image from "next/image";
import Text from "../_components/Text";
import Casino from "@/public/casino.png";
import Lounge from "@/public/lounge.png";
import Pool from "@/public/pool.png";

export default function Services() {
  return (
    <div className="flex h-dvh items-center justify-center gap-15">
      <div className="flex flex-col w-[30%] gap-2.5">
        <Text styling="text-[1.2rem]">Wide Selection of Services</Text>
        <Text styling="text-[3rem] font-bold">Indulgence at Every Turn</Text>
        <Text styling="text-[1rem]">
          At Celestique Echelon, every detail is designed to delight. Whether
          you&apos;re sipping signature cocktails at our sky bar, trying your
          luck in our state-of-the-art casino, relaxing by the luxurious pools,
          or enjoying gourmet dining from around the world—our world-class
          amenities offer something for every mood, taste, and moment.
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
  );
}
