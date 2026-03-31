import Link from "next/link";
import Image from "next/image";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">

          {/* Logo / Name */}
          <Link
            href="#home"
            className="flex items-center gap-2 text-2xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            {/* Agar logo nahi hai to name show hoga */}
            <span>Sujeet<span className="text-purple-400">.</span></span>
          </Link>

          {/* Navigation */}
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li>
              <Link
                href="#home"
                className="text-white hover:text-purple-400 transition-colors text-base"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="#about"
                className="text-white hover:text-purple-400 transition-colors text-base"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="#experience"
                className="text-white hover:text-purple-400 transition-colors text-base"
              >
                Experience
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="text-white hover:text-purple-400 transition-colors text-base"
              >
                Contact
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  );
}
