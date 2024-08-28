"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel } from "flowbite-react";
// import "flowbite";

const HeroSection = () => {
  return (
    <motion.div className="h-56 border-y-[1px] sm:h-64 xl:h-80 2xl:h-96" initial={{ x: -1600 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.8 }}>
      <Carousel pauseOnHover>
        <Image
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
          width={100}
          height={90}
        />
        <Image
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
          width={100}
          height={90}
        />
        <Image
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
          width={100}
          height={90}
        />
        <Image
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
          width={100}
          height={90}
        />
        <Image
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
          width={100}
          height={90}
        />
      </Carousel>
    </motion.div>
  );
};

export default HeroSection;
