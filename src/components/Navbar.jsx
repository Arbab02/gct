'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <motion.header 
      className=" bg-[#cbd3cb] body-font border-b-[1px] border-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-medium  container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <motion.div 
          className="flex-shrink-0"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/logo.png"
            width={90}
            height={90}
            alt="Logo"
          />
        </motion.div>

        <motion.nav 
          className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link className="mr-5 text-gray-700 font-bold hover:text-[green] transition duration-300" href="/">Home</Link>
          <Link className="mr-5 text-gray-700 font-bold hover:text-[green] transition duration-300" href="/About">About Us</Link>
          {/* <Link className="mr-5 text-gray-700 font-bold hover:text-[green] transition duration-300" href="/Services">News & Events</Link>         */}
          {/* <Link className="mr-5 text-gray-700 font-bold hover:text-[green] transition duration-300" href="/Services">FAQs</Link> */}
          <Link className="mr-5 text-gray-700 font-bold hover:text-[green] transition duration-300" href="/Contact">Contact Us</Link>
        </motion.nav>

        <motion.button 
          className="inline-flex items-center text-white bg-[green] border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 transition duration-300"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
         umer@gmail.com
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Navbar;
