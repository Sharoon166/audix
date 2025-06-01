"use client"
import Link from "next/link";
import { GoArrowUpLeft } from "react-icons/go";
import { useRouter } from "next/navigation";

export default function Header() {
    const router=useRouter()
  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="group">
            <h2 className="font-molgan text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
              Audix
            </h2>
          </Link>

          <nav>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300 group"
            >
              <GoArrowUpLeft
                size={20}
                className="group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              Back
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
