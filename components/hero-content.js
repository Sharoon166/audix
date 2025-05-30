"use client";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export default function HeroContent() {
    return (
        <div className="space-y-2">
            <h1 className="text-2xl font-semibold font-molgan leading-tight">
                Wireless N7007 &trade;
            </h1>
            <p>
                Experience the freedom of wireless sound with our N7007 earbuds.
                Engineered for music lovers, gamers, and everyday listeners.
            </p>
            <Link href="#" className="px-0.5 text-sm font-semibold mt-4 inline-flex items-center border-b-2 border-transparent hover:border-zinc-950 cursor-pointer">
                Explore Now
                <LuArrowUpRight className="ml-2 inline" />
            </Link>
        </div>
    );
}