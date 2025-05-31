"use client";
import { AnimatePresence, motion } from "framer-motion";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import { collections, products } from "@/constants";
import { useParams } from "next/navigation";

export default function Page() {
  const { productId } = useParams();
  const product = products.find((product) => product.id == productId);
  const collection = collections.find((collection) => collection.products.includes(Number(productId)));

  return (
    <div className="w-[95%] sm:w-[85%] p-4  mx-auto ">
      <header className="flex flex-col sm:flex-row items-center justify-between font-sans">
        <Link href="/">
          <h2 className="font-molgan text-xl sm:text-2xl font-bold mb-4 sm:mb-0">
            Audix
          </h2>
        </Link>
        <nav>
          <ul className="flex items-center gap-2 sm:gap-4 text-sm">
            <li className="flex justify-end p-3 sm:p-6">
              <Link
                href={`/`}
                className="flex items-center text-sm sm:text-md font-semibold hover:text-gray-600 transition-colors duration-300 group"
              >
                Back
                <GoArrowUpLeft
                  size={28}
                  className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </Link>{" "}
            </li>
          </ul>
        </nav>
      </header>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, zIndex: -99 }}
          animate={{ opacity: 1}}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="fixed top-[5%] left-[1%] h-[90vh] w-full max-w-2xl pointer-events-none -z-50">
            {/* First SVG */}
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 blur-3xl opacity-70"
            >
              <path
                fill="#4B008266"
                d="M44.4,-41C57.9,-31,69.4,-15.5,69.8,0.4C70.3,16.4,59.7,32.7,46.2,45.8C32.7,59,16.4,68.8,2,66.9C-12.4,64.9,-24.8,51.1,-36.4,37.9C-48,24.8,-58.8,12.4,-58.7,0C-58.7,-12.4,-47.9,-24.7,-36.3,-34.8C-24.7,-44.9,-12.4,-52.7,1.6,-54.2C15.5,-55.8,31,-51.1,44.4,-41Z"
                transform="translate(110 70) scale(1.2)"
              />
            </motion.svg>

            {/* Second SVG */}
            <motion.svg
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 blur-3xl opacity-30"
            >
              <path
                fill="#f04a4d"
                d="M44.4,-41C57.9,-31,69.4,-15.5,69.8,0.4C70.3,16.4,59.7,32.7,46.2,45.8C32.7,59,16.4,68.8,2,66.9C-12.4,64.9,-24.8,51.1,-36.4,37.9C-48,24.8,-58.8,12.4,-58.7,0C-58.7,-12.4,-47.9,-24.7,-36.3,-34.8C-24.7,-44.9,-12.4,-52.7,1.6,-54.2C15.5,-55.8,31,-51.1,44.4,-41Z"
                transform="translate(10 120) scale(1.1)"
              />
            </motion.svg>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col lg:flex-row items-center gap-4 justify-center  w-[95vw] lg:w-[80vw] m-auto">
        <div className="p-4 md:p-8 lg:p-16 z-50">
          <Image
            src={product.image}
            width={600}
            height={600}
            alt="image"
            className="w-full h-auto"
          />
        </div>
        <div className="space-y-1 px-4 max-w-2xl  md:px-0">
          <h2 className="text-xl md:text-2xl font-molgan font-semibold">
            logi
          </h2>
          <h1 className="text-3xl md:text-4xl pb-4">{product.name}</h1>
          <div className="flex flex-col md:flex-row items-center pb-18">
            <p className="w-full md:w-72">{product.description}</p>
            <p className="w-full md:w-72">{product.description}</p>
          </div>
          <div id="right-div" className="flex flex-col md:flex-row  gap-4 md:gap-2 overflow-x-auto no-scrollbar max-w-full">
            {product.features.map(({ heading, detail }) => (
              <div
                key={heading}
                className="w-full md:w-60 space-y-1 flex-shrink-0"
              >
                <h2 className="text-lg md:text-xl font-semibold">
                  {heading}
                </h2>
                <p>{detail}</p>
              </div>
            ))}
          </div>
          <div className="h-[2px] mt-10 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <div className="flex justify-end p-4 md:p-6">
            <Link
              href={`/collection/${collection?.id}`}
              className="flex items-center text-sm md:text-md font-semibold hover:text-gray-600 transition-colors duration-300 group"
            >
              Watch Collection
              <GoArrowUpRight
                size={28}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>{" "}
          </div>
        </div>
      </div>
      <footer className="text-sm flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Audix. All rights reserved.</p>
      </footer>
    </div>
  );
}
