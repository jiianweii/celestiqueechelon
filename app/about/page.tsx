import Text from "../_components/Text";
import Banner from "../_ui/Banner";
import bgImg from "@/public/lobby.png";
import Vision from "../_ui/Vision";
import Celebration from "../_ui/Celebration";

export default function page() {
  return (
    <div className="flex flex-col w-[100%]">
      <Banner image={bgImg}>
        <Text styling="text-[2rem]">Discover the art of indulgence</Text>
        <Text styling="text-[3.8rem] mt-[-18px] font-bold">
          About Celestique Echelon
        </Text>
      </Banner>
      <Vision />
      <Celebration />
    </div>
  );
}
