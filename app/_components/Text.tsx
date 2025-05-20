interface TextProps {
  styling?: string;
  children: React.ReactNode;
}

export default function Text({ styling, children }: TextProps) {
  return <p className={styling}>{children}</p>;
}
