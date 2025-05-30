"use client";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Wireless N7007",
    description:
      "Experience the freedom of wireless sound with our N7007 earbuds. Engineered for music lovers, gamers, and everyday listeners.",
    image: "/earbuds/skywave.webp",
    price: "$199.99",
  },
  {
    id: 2,
    name: "StudioFlex Pro",
    description:
      "Professional-grade audio quality with premium comfort. Perfect for studio sessions and extended listening.",
    image: "/earbuds/studioflex.png",
    price: "$349.99",
  },
  {
    id: 3,
    name: "GamePulse Elite",
    description:
      "Ultra-low latency gaming earbuds with immersive 3D audio. Dominate your games with crystal-clear communication.",
    image: "/earbuds/gamepulse.png",
    price: "$229.99",
  },
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const getImageAtIndex = (offset) => {
    const index = (currentIndex + offset + products.length) % products.length;
    return products[index];
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const imageVariants = {
    main: {
      initial: { x: 100, opacity: 0, scale: 1 },
      animate: { x: 0, opacity: 1, scale: 1.25 },
      exit: { x: -100, opacity: 0, scale: 1 },
    },
    secondary: {
      initial: { x: 80, opacity: 0, scale: 1 },
      animate: { x: 0, opacity: 0.6, scale: 1.1 },
      exit: { x: -80, opacity: 0, scale: 1 },
    },
    tertiary: {
      initial: { x: 60, opacity: 0, scale: 1 },
      animate: { x: 0, opacity: 0.3, scale: 1 },
      exit: { x: -60, opacity: 0, scale: 1 },
    },
  };

  const currentProduct = products[currentIndex];

  return (
    <>
      <div className="space-y-2 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={`title-${currentIndex}`}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-2xl font-semibold font-molgan leading-tight">
              {currentProduct.name} &trade;
            </h1>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${currentIndex}`}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {currentProduct.description}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`price-${currentIndex}`}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-lg font-semibold text-zinc-700"
          >
            {currentProduct.price}
          </motion.div>
        </AnimatePresence>

        <Link
          href="#"
          className="px-0.5 text-sm font-semibold mt-4 inline-flex items-center border-b-2 border-transparent hover:border-zinc-950 cursor-pointer"
        >
          Explore Now
          <LuArrowUpRight className="ml-2 inline" />
        </Link>
      </div>

      <div className="md:col-span-2 grid grid-cols-6 place-items-center relative ">
        <AnimatePresence mode="wait">
          <motion.div
            key={`main-${currentIndex}`}
            className="col-span-3"
            variants={imageVariants.main}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={getImageAtIndex(0).image}
              alt={getImageAtIndex(0).name}
              width={600}
              height={600}
              className="scale-100"
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`secondary-${currentIndex}`}
            className="col-span-2 blur-sm"
            variants={imageVariants.secondary}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          >
            <Image
              src={getImageAtIndex(1).image}
              alt={getImageAtIndex(1).name}
              width={250}
              height={250}
              className="scale-110"
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`tertiary-${currentIndex}`}
            className="blur-md"
            variants={imageVariants.tertiary}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          >
            <Image
              src={getImageAtIndex(2).image}
              alt={getImageAtIndex(2).name}
              width={150}
              height={150}
            />
          </motion.div>
        </AnimatePresence>

        <div
          className="absolute top-0 left-0 h-full w-full flex cursor-none z-10"
          aria-label="hidden"
          aria-hidden="true"
        >
          <div className="w-1/3 " id="left-div" onClick={handleLeftClick} />
          <div className="w-2/3 " id="right-div" onClick={handleRightClick} />
        </div>
      </div>
    </>
  );
}
