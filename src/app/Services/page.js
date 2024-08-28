'use client'

import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    category: "CATEGORY",
    title: "The Catalyzer",
    price: "$16.00",
    image: "/images/bg.png",
  },
  {
    id: 2,
    category: "CATEGORY",
    title: "Shooting Stars",
    price: "$21.15",
    image: "/images/bg.png",
  },
  {
    id: 3,
    category: "CATEGORY",
    title: "Neptune",
    price: "$12.00",
    image: "/images/bg.png",
  },
  {
    id: 4,
    category: "CATEGORY",
    title: "The 400 Blows",
    price: "$18.40",
    image: "/images/bg.png",
  },
  {
    id: 5,
    category: "CATEGORY",
    title: "The Catalyzer",
    price: "$16.00",
    image: "/images/bg.png",
  },
  {
    id: 6,
    category: "CATEGORY",
    title: "Shooting Stars",
    price: "$21.15",
    image: "/images/bg.png",
  },
  {
    id: 7,
    category: "CATEGORY",
    title: "Neptune",
    price: "$12.00",
    image: "/images/bg.png",
  },
  {
    id: 8,
    category: "CATEGORY",
    title: "The 400 Blows",
    price: "$18.40",
    image: "/images/bg.png",
  },
];

const Services = () => {
  return (
    <section className="bg-[#0D0214] text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {servicesData.map((service) => (
            <motion.div 
              key={service.id} 
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={service.image} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 font-heading">{service.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium font-heading">{service.title}</h2>
                <p className="mt-1 font-sans">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
