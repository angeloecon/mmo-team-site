"use client"

import { heroHeader, heroSubHeader } from "@/lib/styles";
import { motion } from "framer-motion";
import GlitchText from "../Effects/GlitchText";

export default function HeroTitle() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const floatingUpVariant = {
    floating: {
      y: [-10, 0, -10],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const floatingDownVariant = {
    floating: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const textEntrance = {
    hidden: { opacity: 0, y: 60, scale: 0.9, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { type: "spring", mass: 1.2, stiffness: 120, damping: 14 },
    },
  };

  return (
    <div className="relative w-full flex justify-center mt-20 py-10">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={["visible", "floating"]}
        className="relative z-10 text-center max-w-4xl"
      >
        <motion.h1
          variants={{ ...textEntrance, ...floatingDownVariant }}
          className={heroHeader}
        >
          Welcome to
        </motion.h1>
        <motion.h1
          variants={{ ...textEntrance, ...floatingUpVariant }}
          className={heroHeader}
        >
          <GlitchText
            text="CHOSEN ONES"
            className="text-purple-500 drop-shadow-[0_0_15px_rgba(167,139,250,0.8)]"
          />
        </motion.h1>

        <motion.p
          variants={{ ...textEntrance, ...floatingDownVariant }}
          className={heroSubHeader}
        >
          Elite trainers. Many are called. Few are Chosen.
        </motion.p>
      </motion.div>
    </div>
  );
}
