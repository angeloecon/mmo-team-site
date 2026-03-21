"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroTitle from "./Title/HeroTitle";
import Particles from "./Effects/Particles";

const bgImages = [
  "/images/hero-bg-1.png",
  "/images/hero-bg-2.png",
  "/images/hero-bg-3.png",
  "/images/hero-bg-4.png",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white p-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={bgImages[currentIndex]}
              alt={`Team Background ${currentIndex + 1}`}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent z-0" />
      
      <Particles/>
      <HeroTitle/>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }} 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-xs text-zinc-500 uppercase tracking-widest">
          Scroll to Explore
        </span>
 
        <motion.svg
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}  
          className="w-6 h-6 text-purple-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </motion.svg>
      </motion.div>
    </section>
  );
}
