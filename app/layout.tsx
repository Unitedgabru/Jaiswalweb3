import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

/* 🔹 CHANGE ONLY THIS PART LATER */
export const metadata: Metadata = {
  title: "Your Name – Software Engineer & UI/UX Designer",
  description:
    "A self-taught Software Engineer and UI/UX Designer. I design and build modern, user-friendly digital experiences.",
  keywords: [
    "Your Name",
    "Software Engineer",
    "UI/UX Designer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.vercel.app",
    title: "Your Name – Software Engineer & UI/UX Designer",
    description:
      "Portfolio of Your Name – Software Engineer & UI/UX Designer.",
    siteName: "Your Name Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Your Name – Software Engineer & UI/UX Designer",
    description:
      "Portfolio of Your Name – Software Engineer & UI/UX Designer.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 🔹 CHANGE DOMAIN WHEN READY */}
        <link rel="canonical" href="https://yourdomain.vercel.app" />
      </head>

      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
