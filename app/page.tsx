import Button from "./_components/Button";
import Text from "./_components/Text";
import Banner from "./_ui/Banner";
import Features from "./_ui/Features";
import Services from "./_ui/Services";
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
      <Services />
      <Features />
    </div>
  );
}
