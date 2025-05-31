"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import { LuArrowUpRight } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { products } from "@/constants";

export default function Slideshow({ setSlide, setSlideLength }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    setSlideLength(products.length);
  }, [setSlideLength]);

  useEffect(() => {
    setSlide(currentIndex);
  }, [currentIndex, setSlide]);

  const handleMouseEnter = (divId) => {
    if (divId === "left-div") {
      setDirection(-1);
    } else if (divId === "right-div") {
      setDirection(1);
    }
  };

  const handleLeftClick = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleRightClick = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const getImageAtIndex = (offset) => {
    const index = (currentIndex + offset + products.length) % products.length;
    return products[index];
  };

  const textVariants = {
    initial: (direction) => ({ opacity: 0, y: direction * 20 }),
    animate: { opacity: 1, y: 0 },
    exit: (direction) => ({ opacity: 0, y: direction * -20 }),
  };

  const imageVariants = {
    first: {
      initial: (direction) => ({ x: direction * 100, opacity: 0, scale: 1 }),
      animate: { x: 0, opacity: 1, scale: 1.1 },
      exit: (direction) => ({ x: direction * -100, opacity: 0, scale: 1 }),
    },
    second: {
      initial: (direction) => ({ x: direction * 80, opacity: 0, scale: 1 }),
      animate: { x: 0, opacity: 0.6, scale: 1 },
      exit: (direction) => ({ x: direction * -80, opacity: 0, scale: 1 }),
    },
    third: {
      initial: (direction) => ({ x: direction * 60, opacity: 0, scale: 1 }),
      animate: { x: 0, opacity: 0.3, scale: 0.8 },
      exit: (direction) => ({ x: direction * -60, opacity: 0, scale: 1 }),
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
            custom={direction}
            transition={{ duration: 0.3 }}
            style={{ viewTransitionName: `product-title-${currentProduct.id}` }}
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
            custom={direction}
            transition={{ duration: 0.3, delay: 0.1 }}
            style={{ viewTransitionName: `product-description-${currentProduct.id}` }}
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
            custom={direction}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-lg font-semibold text-zinc-700"
            style={{ viewTransitionName: `product-price-${currentProduct.id}` }}
          >
            {currentProduct.price}
          </motion.div>
        </AnimatePresence>

        <Link
          href={`/product/${currentProduct.id}`}
          className="px-0.5 mb-4 text-sm font-semibold mt-4 inline-flex items-center border-b-2 border-transparent hover:border-zinc-950 cursor-pointer"
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
            variants={imageVariants.first}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ viewTransitionName: `product-image-${currentProduct.id}` }}
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
            variants={imageVariants.second}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
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
            variants={imageVariants.third}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
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
          className="absolute top-0 left-0 h-full w-full flex  z-10"
          aria-label="hidden"
          aria-hidden="true"
        >
          <div
            className="w-1/3 cursor-none leftdiv"
            id="left-div"
            onClick={handleLeftClick}
            onMouseEnter={() => handleMouseEnter("left-div")}
          />
          <div
            className="w-2/3 cursor-none rightdiv"
            id="right-div"
            onClick={handleRightClick}
            onMouseEnter={() => handleMouseEnter("right-div")}
          />
        </div>
      </div>
    </>
  );
}
