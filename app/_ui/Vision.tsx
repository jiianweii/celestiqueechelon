import Image from "next/image";
import React from "react";
import Text from "../_components/Text";

import Building from "@/public/celestiquebg.png";

export default function Vision() {
  return (
    <div className="flex h-dvh items-center justify-center gap-15 p-[12rem] bg-gray-800">
      <div className="h-[100%] w-[100%] p-[4rem] relative">
        <Image
          src={Building}
          fill
          alt="building of Celestique Echelon"
          className="object-cover"
        />
      </div>
      <div className="w-[100%] flex flex-col gap-1.5">
        <Text styling="text-[1rem]">Experience Extraordinary</Text>
        <Text styling="text-[3rem] text-bold">Our Vision</Text>
        <Text styling="text-[1.5rem] mt-4">
          At Celestique Echelon, we go beyond accommodation—we provide a
          lifestyle. Whether you&apos;re here for business or leisure,
          you&apos;ll enjoy a curated selection of entertainment options, from
          rooftop lounges and fine-dining restaurants to serene spa treatments
          and private wellness retreats. Our personalized service, exceptional
          hospitality, and attention to detail set us apart as a destination of
          choice for those seeking the extraordinary.
        </Text>
      </div>
    </div>
  );
}
