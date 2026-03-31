import Link from "next/link";
import Image from "next/image";

export default function Footer(): React.JSX.Element {
  return (
    <footer id="contact" className="py-10 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        
        {/* Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Contact
          </h2>

          <p className="text-md text-white/80 max-w-2xl mx-auto mb-8">
            I&apos;m open to opportunities as a Discord or Region Moderator and
            collaborations related to community management or content creation.
            If you have a role or project in mind, feel free to reach out.
          </p>

          <a
            href="mailto:sujit79086@email.com"
            className="text-md text-purple-400 hover:text-purple-300 transition-colors"
          >
            sujit79086@email.com
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-12">
          
          {/* Twitter / X */}
          <Link
            href="https://x.com/Sujeet0108"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="Twitter"
          >
            <Image
              src="/assets/twitter.webp"
              alt="Twitter"
              width={20}
              height={20}
            />
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/Jaiswalweb3"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>

          {/* Medium */}
          <Link
            href="https://medium.com/@your-medium-username"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="Medium"
          >
            <Image
              src="/assets/medium.webp"
              alt="Medium"
              width={20}
              height={20}
            />
          </Link>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Sujeet Jaiswal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
