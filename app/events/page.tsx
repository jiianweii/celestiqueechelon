import Text from "../_components/Text";
import Banner from "../_ui/Banner";
import Wedding from "@/public/wedding.jpg";

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
      <div className="flex h-dvh items-center justify-center gap-15 p-[12rem] bg-gray-800"></div>
    </div>
  );
}
