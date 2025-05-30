"use client";
import Image from "next/image";

export default function ProductShowcase() {
    return (
        <div className="md:col-span-2 grid grid-cols-6 place-items-center relative">
            <Image src="/earbuds/skywave.webp" alt="Zero" width={600} height={600} className="col-span-3 scale-125" />
            <Image src="/earbuds/studioflex.png" alt="Zero" width={250} height={250} className="blur-sm col-span-2 scale-110" />
            <Image src="/earbuds/gamepulse.png" alt="Zero" width={150} height={150} className="blur-md" />

            <div className="absolute top-0 left-0 h-full w-full flex" aria-label="hidden" aria-hidden="true">
                <div className="w-1/3 " />
                <div className="w-2/3 " />
            </div>
        </div>
    )
}