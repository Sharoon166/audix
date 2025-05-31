"use client";
import { useEffect, useState } from "react";
import { FiArrowRightCircle, FiArrowLeftCircle, arro } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [icon, setIcon] = useState("right");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      if (target.closest("#left-div")) {
        setIcon("left");
      } else if (target.closest("#right-div")) {
        setIcon("right");
      } else {
        setIcon("");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-150 ease-out cursor-none"
        style={{
          top: position.y - 12,
          left: position.x - 12,
        }}
      >
        <AnimatePresence mode="wait">
          {icon === "left" && (
            <motion.div
              key="left"
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              }}
              exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
              className="text-gray-700"
            >
              <FiArrowLeftCircle size={28} />
            </motion.div>
          )}
          {icon === "right" && (
            <motion.div
              key="right"
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              }}
              exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
              className="text-gray-700"
            >
              <FiArrowRightCircle size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
