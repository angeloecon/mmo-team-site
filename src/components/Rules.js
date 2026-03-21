"use client";

import { motion } from "framer-motion";
import teamRules from "../data/team.json";
import { sectionSans } from "@/lib/styles";
import SectionTitle from "./Title/SectionTitle";

export default function Rules() {
  return (
    <section className="py-24 bg-zinc-950 text-white px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-purple-600/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <SectionTitle
          firstWord={"Our"}
          secondWord={"Code"}
          sentence={"Excellence requires discipline. These are our core mandates."}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {teamRules.teamRules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group relative bg-zinc-900/40 backdrop-blur-md border border-zinc-800 p-8 md:p-10 rounded-2xl hover:bg-zinc-900/80 hover:border-purple-500/50 transition-all duration-300 shadow-lg overflow-hidden"
            >
              <div className="absolute -bottom-6 -right-2 text-8xl md:text-9xl font-heading font-black text-zinc-800/30 group-hover:text-purple-900/20 transition-colors duration-500 select-none pointer-events-none z-0">
                0{index + 1}
              </div>

              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-800 group-hover:bg-purple-500 transition-colors duration-300 z-10"></div>

              <div className="relative z-20 flex items-start gap-4">
                <span className="font-sub-heading text-2xl text-purple-400 font-bold mt-1">
                  {index + 1}.
                </span>

                <p className={`${sectionSans} leading-relaxed group-hover:text-zinc-100 transition-colors duration-300`}>
                  {rule}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
