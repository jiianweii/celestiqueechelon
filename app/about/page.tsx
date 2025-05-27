import Text from "../_components/Text";
import Banner from "../_ui/Banner";
import bgImg from "@/public/lobby.png";
import Building from "@/public/celestiquebg.png";
import Party from "@/public/buffet.png";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col w-[100%]">
      <Banner image={bgImg}>
        <Text styling="text-[3.8rem] font-bold">
          Discover the art of indulgence
        </Text>
        <Text styling="text-[2rem] ">About Celestique Echelon</Text>
      </Banner>
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
          <Text styling="text-[3rem] font-bold">Our Vision</Text>
          <Text styling="text-[1.5rem] mt-4">
            At Celestique Echelon, we go beyond accommodation—we provide a
            lifestyle. Whether you&apos;re here for business or leisure,
            you&apos;ll enjoy a curated selection of entertainment options, from
            rooftop lounges and fine-dining restaurants to serene spa treatments
            and private wellness retreats. Our personalized service, exceptional
            hospitality, and attention to detail set us apart as a destination
            of choice for those seeking the extraordinary.
          </Text>
        </div>
      </div>
      <div className="flex h-dvh items-center justify-center gap-15 p-[12rem] bg-gray-900">
        <div className="w-[100%] flex flex-col gap-1.5">
          <Text styling="text-[1rem]">
            Host with prestige. Celebrate in style
          </Text>
          <Text styling="text-[3rem] font-bold">Grand Celebrations</Text>
          <Text styling="text-[1.5rem] mt-4">
            Elevate your next event with the elegance and excellence that only
            Celestique Echelon can offer. With breathtaking cityscape backdrops,
            impeccable service, and a commitment to creating unforgettable
            moments, every occasion becomes a grand affair. Our cutting-edge
            event venues are designed with flexibility and sophistication in
            mind—accommodating everything from lavish weddings and gala dinners
            to high-level corporate summits and intimate private celebrations.
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
    </div>
  );
}
