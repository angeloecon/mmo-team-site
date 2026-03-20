"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="
    min-h-screen bg-zinc-950 
    flex flex-col items-center 
    justify-center text-white 
    relative overflow-hidden 
    select-none px-4"
    >
      <div
        className="absolute top-1/2 
      left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[400px] h-[400px] bg-purple-600/40 blur-[100px] 
      rounded-full pointer-events-none"
      />

      {/*  */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="text-[120px] md:text-[200px] 
        font-black font-heading leading-none 
        text-zinc-900 tracking-tighter drop-shadow-2xl relative z-0"
      >
        4<span className="text-purple-400">0</span>4
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
        className="bg-zinc-900 border-4 border-zinc-200 rounded-xl 
        md:pl-8 md:pt-8 max-w-2xl w-full z-10 
        shadow-[0_0_30px_rgba(0,0,0,0.8)] relative -mt-10 md:-mt-16"
      >
        <div className="relative ml-8 md:ml-0 my-8 md:mt-0">
          <p className="font-sub-heading text-xl md:text-3xl uppercase tracking-widest leading-relaxed">
            A wild <span className="text-cyan-400">404 Error</span> appeared!{" "}
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="absolute text-xs md:text-sm bottom-2 md:bottom-3 text-zinc-400 font-bold"
            >
              {" "}
              ▼{" "}
            </motion.span>
          </p>
        </div>

        {/* Battle Menu Contianer */}
        <div
          className=" grid grid-cols-2 gap-4 md:gap-6 
        md:w-2/3 ml-auto border-t-4 md:border-l-4 
        border-zinc-500 md:rounded-tl-xl py-6 pl-6"
        >
          {["Fight", "Bag", "Pokemon"].map((item, index) => (
            <div
              key={index}
              className="p-2 text-zinc-600 cursor-not-allowed flex items-center gap-2"
            >
              <span className="text-transparent">▶</span>
              <span className="font-bold tracking-widest uppercase">
                {item}
              </span>
            </div>
          ))}

          <Link href="/" className="group block">
            <div
              className="p-2 text-zinc-300 group-hover:text-cyan-400 
            transition-colors cursor-pointer flex items-center gap-2"
            >
              <span className="text-transparent group-hover:text-cyan-400 transition-colors">
                ▶
              </span>
              <span className="font-bold tracking-widest uppercase">Run</span>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
