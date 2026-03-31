"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = [
    "Discord Moderator",
    "Region Moderator",
    "Content Creator",
    "Community Manager",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTypingSpeed(100);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Image Section */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative top-10">
              <div className="lg:hidden z-10 mb-6">
                <p className="text-white text-lg text-center">
                  Hello! I Am{" "}
                  <span className="text-purple-400 font-semibold">
                    Sujeet Jaiswal
                  </span>
                </p>
              </div>

              <Image
                src="/assets/me.png"
                alt="Sujeet Jaiswal"
                width={300}
                height={300}
                className="max-w-md absolute"
                priority
              />
              <Image
                src="/assets/me-glow.png"
                alt="Sujeet Jaiswal"
                width={300}
                height={300}
                className="max-w-md"
                priority
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="hidden lg:block">
              <p className="text-white text-lg">
                Hello! I Am{" "}
                <span className="text-purple-400 font-semibold">
                  Sujeet Jaiswal
                </span>
              </p>
            </div>

            <div>
              <p className="text-2xl">A Community Specialist who</p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold leading-tight">
                Builds
                <br /> strong{" "}
                <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                  communities
                </span>
              </h1>
              <p className="text-md text-white/80">
                Creating safe, engaging, and scalable online environments.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="space-y-4 pt-16 text-center lg:text-left">
          <p className="text-4xl lg:text-5xl font-bold">
            I&apos;m a {displayedText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-lg lg:text-xl text-white/90">
            Currently working as{" "}
            <span className="text-blue-400 font-semibold">
              Discord & Region Moderator
            </span>
          </p>

          <p className="text-lg text-white/80 max-w-2xl mx-auto lg:mx-0">
            I manage and moderate online communities, handle user reports,
            enforce rules, and ensure a healthy and engaging environment.
            <br />
            <br />
            I also create content and write Medium articles about new and
            existing projects, community growth, and digital platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
