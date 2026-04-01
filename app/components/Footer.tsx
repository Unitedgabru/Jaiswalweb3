import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "Instagram",
    link: "https://instagram.com/",
    icon: "/assets/insta.webp",
  },
  {
    name: "GitHub",
    link: "https://github.com/",
    icon: "/assets/github.webp",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/",
    icon: "/assets/linkedin.webp",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/",
    icon: "/assets/twitter.webp",
  },
  {
    name: "Medium",
    link: "https://medium.com/",
    icon: "/assets/medium.webp",
  },
];

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="flex justify-center gap-6">
        {socials.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            target="_blank"
            className="opacity-70 hover:opacity-100 transition"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={28}
              height={28}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
}
