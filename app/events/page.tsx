import { Suspense } from "react";
import Text from "../_components/Text";
import TextIcon from "../_components/TextIcon";
import Banner from "../_ui/Banner";
import Wedding from "@/public/wedding.jpg";
import VenueList from "../_components/VenueList";
import VenueListSkeleton from "../_components/VenueListSkeleton";

// const purposes = ["Weddings", "Galas", "Corporate Dinners", "Award Ceremonies"];
// const services = [
//   "Gourmet Catering",
//   "Event Planning",
//   "Stage Setup",
//   "Lighting & Sound Design",
// ];

export default function page() {
  return (
    <div className="flex flex-col w-[100%]">
      <Banner image={Wedding}>
        <Text styling="text-[1.5rem]">
          Host Grand Events in Timeless Elegance
        </Text>
        <Text styling="text-[3.8rem] mt-[4px] font-bold">
          Celebrate at Celestique Echelon
        </Text>
        <Text styling="text-[1.3rem] mt-[12px] text-center">
          Where elegance meets excellence. At Celestique Echelon, we offer a
          world-class setting for weddings, corporate functions, galas, and
          private celebrations. Our luxurious event spaces, award-winning
          service, and personalized planning ensure that every gathering becomes
          an unforgettable experience.
        </Text>
      </Banner>
      <div className="flex h-[100%] justify-center gap-15 p-[1rem] bg-gray-800">
        <div className="flex gap-8">
          <TextIcon icon="material-symbols:call" title="+65 6893 3711" />
          <TextIcon icon="ic:baseline-email" title="bkvenues@cechelon.com" />
          <TextIcon icon="ri:gps-fill" title="2 Dundee Rd, Singapore 149454" />
        </div>
      </div>
      <div className="flex flex-col px-[12rem] py-[5rem] bg-gray-700">
        <Text styling="text-[1.6rem] font-bold">
          Events at Celestique Echelon
        </Text>
        <Text styling="text-[2.2rem] font-extrabold">
          Elegant Spaces for Unforgettable Gatherings
        </Text>
        <Text styling="text-[1.2rem] mt-[20px]">
          At Celestique Echelon, we specialize in creating exceptional
          experiences for weddings, corporate functions, galas, and private
          celebrations. Whether you&apos;re envisioning an elegant rooftop
          reception, a high-level board meeting, or a grand ballroom affair, our
          versatile venues and personalized service bring every vision to life.
        </Text>
        <Text styling="text-[1.2rem] mt-[16px]">
          Set in a prestigious location, our hotel offers a curated collection
          of event spaces—from the breathtaking Skyline Rooftop Lounge to the
          majestic Grand Crystal Ballroom. Each venue is designed with style and
          functionality in mind, complemented by state-of-the-art technology and
          tailored catering options.
        </Text>
        <Text styling="text-[1.2rem] mt-[16px]">
          Our dedicated event planners will work closely with you at every
          stage, ensuring your gathering reflects your unique goals and tastes.
          With premium amenities, flexible layouts, and world-class hospitality,
          your guests will enjoy an experience as seamless as it is memorable.
        </Text>
        <Text styling="text-[2.2rem] font-extrabold mt-[4rem] mb-[-12px]">
          Our Venues
        </Text>
        <Suspense fallback={<VenueListSkeleton />}>
          <VenueList />
        </Suspense>
      </div>
    </div>
  );
}
