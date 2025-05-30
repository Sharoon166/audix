import Header from "@/components/header";
import HeroContent from "@/components/hero-content";
import ProductShowcase from "@/components/product-showcase";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

const earbuds = [
  {
    id: "skywave",
    name: "SkyWave Elite",
    description:
      "Experience the freedom of wireless sound with our SkyWave Elite. Engineered for music lovers, gamers, and everyday listeners.",
    price: 199.99,
    image: "/images/skywave.png",
    features: ["40h Battery Life", "Active Noise Cancellation", "Bluetooth 5.2", "IPX4 Water Resistance"]
  },
  {
    id: "sonicpro",
    name: "SonicPro X",
    description:
      "Immerse yourself in crystal-clear audio with the SonicPro X. Perfect for audiophiles seeking premium sound quality and comfort.",
    price: 249.99,
    image: "/images/sonicpro.png",
    features: ["Hi-Res Audio", "Dual Drivers", "Touch Controls", "Fast Charging"]
  },
  {
    id: "pulsepod",
    name: "PulsePod Ultra",
    description:
      "The PulsePod Ultra combines style with performance. Active noise cancellation and premium build quality for the discerning listener.",
    price: 299.99,
    image: "/images/pulsepod.png",
    features: ["Hybrid ANC", "Ambient Mode", "Premium Aluminum Build", "Wireless Charging"]
  },
  {
    id: "studioflex",
    name: "StudioFlex Pro",
    description:
      "Professional-grade audio with the StudioFlex Pro. Studio-quality sound reproduction and advanced wireless connectivity.",
    price: 349.99,
    image: "/images/studioflex.png",
    features: ["Studio Grade Drivers", "LDAC Support", "EQ Customization", "Multi-Device Connection"]
  },
  {
    id: "gamepulse",
    name: "GamePulse Elite",
    description:
      "Experience gaming audio like never before with the GamePulse Elite. Low latency and immersive 3D sound for competitive gaming.",
    price: 229.99,
    image: "/images/gamepulse.png",
    features: ["Ultra-Low Latency", "7.1 Virtual Surround", "RGB Lighting", "Discord Certified"]
  },
  {
    id: "airflow",
    name: "AirFlow Lite",
    description:
      "The AirFlow Lite delivers exceptional battery life and quick charging. Perfect for those always on the move.",
    price: 179.99,
    image: "/images/airflow.png",
    features: ["50h Battery Life", "Quick Charge", "Lightweight Design", "Voice Assistant"]
  },
  {
    id: "comfortpro",
    name: "ComfortPro Plus",
    description:
      "Premium comfort meets superior sound with the ComfortPro Plus. Ideal for extended listening sessions and daily commutes.",
    price: 219.99,
    image: "/images/comfortpro.png",
    features: ["Memory Foam Tips", "Ergonomic Design", "Pressure Relief Vents", "Balanced Armature Drivers"]
  },
  {
    id: "touchwave",
    name: "TouchWave Smart",
    description:
      "The TouchWave Smart features advanced touch controls and voice assistant integration. Smart features for the modern user.",
    price: 259.99,
    image: "/images/touchwave.png",
    features: ["Smart Touch Controls", "AI Voice Enhancement", "Auto-Pause", "Find My Earbuds"]
  },
  {
    id: "aquaflex",
    name: "AquaFlex Sport",
    description:
      "Waterproof and durable, the AquaFlex Sport is built for adventure. Perfect for sports and outdoor activities.",
    price: 189.99,
    image: "/images/aquaflex.png",
    features: ["IP68 Rating", "Secure Fit Wings", "SweatGuard Technology", "Heart Rate Monitor"]
  },
  {
    id: "luxepro",
    name: "LuxePro Signature",
    description:
      "The flagship LuxePro Signature combines all our best features. Premium audio, noise cancellation, and exceptional build quality.",
    price: 399.99,
    image: "/images/luxepro.png",
    features: ["Titanium Drivers", "Adaptive ANC", "Premium Leather Case", "Personalized Sound Profile"]
  },
]

export default function Home() {
  return (
    <div className="min-h-screen max-w-[min(90%,1440px)] mx-auto sm:p-8 flex flex-col">
      <Header />

      <main className="relative grow grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center">
        {/* Gradient Blob */}
        <div className="fixed top-[5%] right-[15%] h-[90vh] w-full max-w-2xl pointer-events-none -z-50">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 blur-3xl opacity-70"
          >
            <path
              fill="#4B008266"
              d="M44.4,-41C57.9,-31,69.4,-15.5,69.8,0.4C70.3,16.4,59.7,32.7,46.2,45.8C32.7,59,16.4,68.8,2,66.9C-12.4,64.9,-24.8,51.1,-36.4,37.9C-48,24.8,-58.8,12.4,-58.7,0C-58.7,-12.4,-47.9,-24.7,-36.3,-34.8C-24.7,-44.9,-12.4,-52.7,1.6,-54.2C15.5,-55.8,31,-51.1,44.4,-41Z"
              transform="translate(130 70) scale(1.2)"
            />
          </svg>{" "}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 blur-3xl opacity-60"
          >
            <path
              fill="#00FFFF77"
              d="M44.4,-41C57.9,-31,69.4,-15.5,69.8,0.4C70.3,16.4,59.7,32.7,46.2,45.8C32.7,59,16.4,68.8,2,66.9C-12.4,64.9,-24.8,51.1,-36.4,37.9C-48,24.8,-58.8,12.4,-58.7,0C-58.7,-12.4,-47.9,-24.7,-36.3,-34.8C-24.7,-44.9,-12.4,-52.7,1.6,-54.2C15.5,-55.8,31,-51.1,44.4,-41Z"
              transform="translate(110 120) scale(1.1)"
            />
          </svg>
        </div>
        {/* End Gradient Blob */}

        <HeroContent />
        <ProductShowcase />
      </main>

      <footer className="text-sm flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Audix. All rights reserved.</p>
        <p className="font-molgan">
          <span className="text-xl font-bold">01</span> / 10
        </p>
      </footer>
    </div>
  );
}
