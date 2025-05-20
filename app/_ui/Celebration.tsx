import Image from "next/image";
import React from "react";
import Text from "../_components/Text";
import Party from "@/public/buffet.png";

export default function Celebration() {
  return (
    <div className="flex h-dvh items-center justify-center gap-15 p-[12rem]">
      <div className="w-[100%] flex flex-col gap-1.5">
        <Text styling="text-[1rem]">
          Host with prestige. Celebrate in style
        </Text>
        <Text styling="text-[3rem] text-bold">Grand Celebrations</Text>
        <Text styling="text-[1.5rem] mt-4">
          Elevate your next event with the elegance and excellence that only
          Celestique Echelon can offer. With breathtaking cityscape backdrops,
          impeccable service, and a commitment to creating unforgettable
          moments, every occasion becomes a grand affair. Our cutting-edge event
          venues are designed with flexibility and sophistication in
          mind—accommodating everything from lavish weddings and gala dinners to
          high-level corporate summits and intimate private celebrations.
        </Text>
      </div>
      <div className="h-[100%] w-[100%] p-[4rem] relative">
        <Image
          src={Party}
          fill
          alt="Celebration events"
          className="object-cover"
        />
      </div>
    </div>
  );
}
