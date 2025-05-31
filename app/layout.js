import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import AnimatedCursor from "@/components/animated-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const molgan = localFont({
  src: "./_fonts/Molgan.otf",
  variable: "--font-molgan",
});

export const metadata = {
  title: "Audix - Hear the Difference",
  description:
    "Audix earbuds deliver premium sound, deep bass, and all-day comfort. Shop wireless earbuds engineered for music lovers, gamers, and everyday listeners.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${molgan.variable} antialiased`}
      >
        <AnimatedCursor />

        {children}
      </body>
    </html>
  );
}
