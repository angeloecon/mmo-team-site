"use client";

import { sectionHeader } from "@/lib/styles";
import { motion } from "framer-motion";

export default function SectionTitle({firstWord, secondWord, sentence}) {
  return (
    <div className="text-center mb-16 relative flex flex-col items-center">
      
      <div className="relative overflow-hidden py-2 px-4">
        <motion.h2
          initial={{ y: "100%", opacity: 0 }}
         
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} 
          className={`${sectionHeader} justify-center 
          text-center font-black uppercase 
          tracking-widest flex flex-wrap gap-4`}
        >
          <span>{firstWord}</span>
          <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            {secondWord}
          </span>
        </motion.h2>
      </div>
 
      {/* ___________________________ */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
 
        className="w-24 h-[4px] bg-cyan-400 mt-6 
        shadow-[0_0_12px_rgba(34,211,238,0.8)] 
        rounded-full"
      />

      <motion.p
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 text-zinc-400 max-w-lg text-lg"
      >
        {sentence}
      </motion.p>
      
    </div>
  );
}