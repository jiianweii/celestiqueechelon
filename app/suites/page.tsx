import Text from "../_components/Text";
import TextIcon from "../_components/TextIcon";
import Banner from "../_ui/Banner";
import bg from "@/public/suites/penthouse_example.jpg";
import img1 from "@/public/suites/penthouse-exp.jpg";
import img2 from "@/public/suites/presidential-exp.jpg";
import Image from "next/image";
import { Suspense } from "react";
import SuiteList from "../_components/SuiteList";

export default function page() {
  return (
    <div className="flex flex-col w-[100%]">
      <Banner image={bg}>
        <Text styling="text-[4rem] font-bold">World Class Accomodation</Text>
      </Banner>
      <div className="flex h-[100%] justify-center gap-15 p-[1rem] bg-gray-800">
        <div className="flex gap-8">
          <TextIcon icon="material-symbols:call" title="+65 6893 3711" />
          <TextIcon
            icon="ic:baseline-email"
            title="reservations@cechelon.com"
          />
          <TextIcon icon="ri:gps-fill" title="2 Dundee Rd, Singapore 149454" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 h-[100dvh] px-[12rem] bg-gray-900">
        <div className="w-[100%] h-[60%] relative">
          <div className="h-[80%] w-[400px] absolute top-[0%] left-[5%]">
            <Image
              src={img1}
              alt="penthouse"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="h-[80%] w-[400px] absolute bottom-[0%] right-[5%]">
            <Image
              src={img2}
              alt="presidential"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 w-[100%] h-[60%] justify-center">
          <Text styling="text-[1.5rem] font-bold">
            Where Elegance Meets Experience
          </Text>
          <Text styling="text-[2.2rem] font-extrabold">
            Luxury Suites at Celestique Echelon
          </Text>
          <Text styling="text-[1.2rem] font-light">
            Step into a world of refined comfort and elevated living at{" "}
            <strong>Celestique Echelon</strong>, where each suite is a private
            sanctuary of design, detail, and distinction. Whether you&apos;re
            seeking a peaceful retreat, an inspiring workspace, or the ultimate
            celebration space, our four suite categories —{" "}
            <em>Deluxe, Studio, Penthouse,</em> and <em>Presidential</em> —
            offer an unmatched experience tailored to your needs.
          </Text>
          <Text styling="text-[1.2rem] font-light">
            Our <strong>Deluxe Suites</strong> are perfect for solo travelers or
            couples, blending chic design with serene city views. For longer
            stays or small families, the <strong>Studio Suites</strong> offer
            spacious, open-plan comfort with residential amenities. Rise to the
            occasion in our exclusive <strong>Penthouse Suites</strong>,
            featuring rooftop terraces and indulgent in-suite services. And for
            those who accept nothing less than extraordinary, the{" "}
            <strong>Presidential Suite</strong> delivers unparalleled luxury,
            with private dining, panoramic views, and world-class hospitality at
            every turn.
          </Text>
          <Text styling="text-[1.2rem] font-light">
            From bespoke furnishings and tech-enabled comfort to personalized
            concierge service, every suite at Celestique Echelon is designed to
            inspire, indulge, and impress. Discover more than just a stay —
            discover your elevated moment.
          </Text>
        </div>
      </div>
      <div className="flex flex-col px-[12rem] py-[5rem] bg-gray-700 items-center">
        <Text styling="text-[2rem] font-bold mb-[38px]">Our Suites</Text>
        <Suspense fallback={<>Loading...</>}>
          <SuiteList />
        </Suspense>
      </div>
    </div>
  );
}
