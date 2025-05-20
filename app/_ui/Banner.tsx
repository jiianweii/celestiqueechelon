import Image, { StaticImageData } from "next/image";

interface BannerProps {
  image: StaticImageData;
  children: React.ReactNode;
}

export default function Banner({ image, children }: BannerProps) {
  return (
    <div className="flex flex-col h-dvh relative">
      <Image
        src={image}
        fill
        quality={100}
        className="object-cover object-top"
        alt={image + ""}
      />
      <div className="absolute top-[50%] left-[50%] translate-[-50%]">
        <div className="flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
