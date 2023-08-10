import Link from "next/link";

export default function LinkButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <p className="text-2xl font-bold hover:opacity-25">{text}</p>
    </Link>
  );
}
