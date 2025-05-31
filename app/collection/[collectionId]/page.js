"use client";

import { collections, products } from "@/constants";
import { Link } from "next-view-transitions";
import { GoArrowUpLeft } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function CollectionPage() {
  const { collectionId } = useParams();
  const router = useRouter();
  const collection = collections.find(
    (collection) => collection.id === Number(collectionId)
  );
  const collectionProducts = products.filter((product) =>
    collection.products.includes(product.id)
  );

  return (
    // Add this to the main div
    <div
      className="w-[95%] sm:w-[85%] p-4 mx-auto flex flex-col gap-4 min-h-screen"
      data-page="collection"
    >
      <header className="flex flex-col sm:flex-row items-center justify-between font-sans">
        <Link href="/">
          <h2 className="font-molgan text-xl sm:text-2xl font-bold mb-4 sm:mb-0">
            Audix
          </h2>
        </Link>
        <nav>
          <ul className="flex items-center gap-2 sm:gap-4 text-sm">
            <li className="flex justify-end p-3 sm:p-6">
              <button
                onClick={() => router.back()}
                className="flex cursor-pointer items-center text-sm sm:text-md font-semibold hover:text-gray-600 transition-colors duration-300 group"
              >
                Back
                <GoArrowUpLeft
                  size={28}
                  className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </button>{" "}
            </li>
          </ul>
        </nav>
      </header>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, zIndex: -99 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="fixed top-[5%] right-[1%] h-[90vh] w-full max-w-2xl pointer-events-none -z-50">
            {/* First SVG */}
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 right-0 blur-3xl opacity-70"
            >
              <path
                fill="#4B008266"
                d="M44.4,-41C57.9,-31,69.4,-15.5,69.8,0.4C70.3,16.4,59.7,32.7,46.2,45.8C32.7,59,16.4,68.8,2,66.9C-12.4,64.9,-24.8,51.1,-36.4,37.9C-48,24.8,-58.8,12.4,-58.7,0C-58.7,-12.4,-47.9,-24.7,-36.3,-34.8C-24.7,-44.9,-12.4,-52.7,1.6,-54.2C15.5,-55.8,31,-51.1,44.4,-41Z"
                transform="translate(110 70) scale(1.2)"
              />
            </motion.svg>

            {/* Second SVG */}
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 right-0 blur-3xl opacity-30"
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

      <div className="flex flex-col-reverse sm:flex-row items-center gap-4">
        <div className="grow">
          <h1
            className="text-xl md:text-4xl font-bold font-molgan leading-loose"
            style={{ viewTransitionName: `collection-title-${collection.id}` }}
          >
            {collection.name}
          </h1>
          <p
            className="py-4 text-sm md:text-base"
            style={{
              viewTransitionName: `collection-description-${collection.id}`,
            }}
          >
            {collection.description}
          </p>
          <p className="pb-2 font-molgan font-semibold text-lg">
            Set includes:
          </p>
          <ol className="ml-8 list-decimal marker:font-semibold space-y-2">
            {collection.features.map(({ heading, detail }, index) => (
              <motion.li
                key={heading}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                style={{
                  viewTransitionName: `collection-feature-${collection.id}-${index}`,
                }}
              >
                <h3 className="text-2xl font-semibold inline-block">
                  {heading}
                </h3>
                <p className="text-sm md:text-base">{detail}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="w-full sm:w-1/2 relative">
          <div
            style={{ viewTransitionName: `collection-image-${collection.id}` }}
          >
            <Image
              src={collectionProducts[0].image}
              alt={collection.name}
              width={500}
              height={500}
            />
          </div>
          <p
            className="absolute bottom-[15%] right-[10%] text-3xl md:text-5xl font-molgan font-semibold"
            style={{ viewTransitionName: `collection-price-${collection.id}` }}
          >
            {collectionProducts[0].price}
          </p>
        </div>
      </div>
    </div>
  );
}
