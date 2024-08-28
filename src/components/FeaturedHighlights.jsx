'use client'

import { FaShippingFast, FaTags, FaUsers, FaAward } from 'react-icons/fa';
import { MdOutlineUpdate } from "react-icons/md";
import { motion } from 'framer-motion';

const FeatureHighlights = () => {
  return (
    <div className="bg-[#cbd3cb] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center">
        <motion.h2
          className="text-3xl text-[green] sm:text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Key Features
        </motion.h2>
        <div className="text-[green] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="bg-[transparent] border-2 border-[green] p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdOutlineUpdate className="text-4xl text-[green] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Up To Date</h3>
            <p>Quality Courses according to the market's demand.</p>
          </motion.div>
          <motion.div
            className="bg-[transparent] border-2 border-[green] p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTags className="text-4xl text-[green] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Best Prices</h3>
            <p>Competitive pricing on all our high-quality garments.</p>
          </motion.div>
          <motion.div
            className="bg-[transparent] border-2 border-[green] p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUsers className="text-4xl text-[green] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Customer Support</h3>
            <p>24/7 support to assist you with any queries.</p>
          </motion.div>
          <motion.div
            className="bg-[transparent] border-2 border-[green] p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaAward className="text-4xl text-[green] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Top Quality</h3>
            <p>Premium quality garments crafted with care.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;
