import Link from "next/link";

interface ButtonProps {
  styling?: string;
  href: string;
  children: React.ReactNode;
}

export default function Button({ styling, children, href }: ButtonProps) {
  return (
    <Link href={href} className={styling}>
      {children}
    </Link>
  );
}
