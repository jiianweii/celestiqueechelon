import Link from "next/link";
import ImageLogo from "@/public/logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={ImageLogo} alt="logo" className="object-cover" />
    </Link>
  );
}
