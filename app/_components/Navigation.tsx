import Link from "next/link";
import Logo from "./Logo";
import Menu from "./Menu";
import Button from "./Button";

export default function Navigation() {
  return (
    <div className="px-8 py-4 flex justify-between items-center">
      <Menu />
      <div className="flex text-[1.25rem] gap-x-25">
        <Link href="/about">About</Link>
        <Link href="/events">Events</Link>
      </div>
      <Logo />
      <div className="flex text-[1.25rem] gap-x-25">
        <Link href="/suites">Suites</Link>
        <Link href="/services">Services</Link>
      </div>
      <Button
        href="/reservation"
        styling="px-3 py-1 border border-2 border-white "
      >
        Reservation
      </Button>
    </div>
  );
}
