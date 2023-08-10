import ContactButton from "@/components/ContactButton";
import LinkButton from "@/components/LinkButton";

export default function Home() {
  return (
    <main className="grid h-screen">
      <ContactButton />
      <div className="self-end border-white border-4 px-8">
        <h1 className="text-6xl">Welcome</h1>
      </div>

      <div className="flex justify-end self-end py-5">
        <ul className="flex items-end justify-end">
          {links.map((link) => (
            <li className="px-5" key={link.href}>
              <LinkButton {...link} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

const links: Array<{ text: string; href: string }> = [
  {
    text: "About",
    href: "about",
  },
  {
    text: "Portfolio",
    href: "portfolio",
  },
  {
    text: "Contact",
    href: "contact",
  },
];
