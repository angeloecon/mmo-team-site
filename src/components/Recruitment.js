"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckMark } from "./Icons";
import { sectionHeader, sectionSans } from "@/lib/styles";
import teamReq from '../data/team.json'

export default function Recruitment() {
const [copiedType, setCopiedType] = useState(null); 
  
  const discordTag = "spychinuggets"; 
  const inGameName = "Scchizo";

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 10000);
  };

  return (
    <section className="py-24 bg-zinc-900 text-white px-6 border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
        >

          <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
            <h2 className={`${sectionHeader} leading-tight`}>
              Think You Have <br/><span className="text-purple-500">What It Takes?</span>
            </h2>
            
            <p className={`${sectionSans} mb-8 leading-relaxed`}>
              We are a community built on having fun. We are looking for friendly players—from dedicated shiny hunters to enthusiastic beginners—who just want to enjoy the game.
            </p>

            <div className="space-y-4 mb-8 md:mb-0">
              <h3 className="font-sub-heading text-2xl text-zinc-200 mb-4 tracking-widest border-b border-zinc-800 pb-2 inline-block">
                MINIMUM REQUIREMENTS:
              </h3>
              
              <ul className="space-y-3">
                {teamReq.requirements.map((req, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 font-sans text-zinc-300"
                  >
                    <CheckMark className={"w-5 h-5 text-cyan-400 shrink-0"}/>
                    {req}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-zinc-950 p-8 md:p-12 md:w-2/5 border-t md:border-t-0 md:border-l border-zinc-800 flex flex-col items-center justify-center text-center relative">
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            <h3 className="font-subheading text-2xl text-white mb-4 relative z-10">
              JOIN THE RANKS
            </h3>
            <p className="font-sans text-sm text-zinc-500 mb-8 relative z-10">
              Our roster is always full! Message an officer in-game or reach out on Discord to secure your slot.
            </p>
            
            <button 
                onClick={() => handleCopy(inGameName, "ign")}
                className="group relative w-full bg-zinc-900 border border-cyan-500/50 hover:border-cyan-400 mb-4 p-4 rounded-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <div className="relative flex flex-col items-center justify-center gap-1">
                  <span className="font-sans text-xs text-zinc-400 uppercase tracking-widest">In-Game Whisper</span>
                  <span className="font-subheading text-xl text-cyan-400 tracking-wider">/w {inGameName}</span>
                  <span className={`font-sans text-xs font-bold tracking-widest uppercase mt-1 transition-colors duration-300 ${copiedType === "ign" ? "text-cyan-400" : "text-zinc-500 group-hover:text-zinc-300"}`}>
                    {copiedType === "ign" ? "Copied!" : "Click to Copy"}
                  </span>
                </div>
              </button>

              <button 
                onClick={() => handleCopy(discordTag, "discord")}
                className="group relative w-full bg-zinc-900 border border-purple-500/50 hover:border-purple-400 p-4 rounded-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-purple-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <div className="relative flex flex-col items-center justify-center gap-1">
                  <span className="font-sans text-xs text-zinc-400 uppercase tracking-widest">Discord Add</span>
                  <span className="font-subheading text-xl text-purple-400 tracking-wider">{discordTag}</span>
                  <span className={`font-sans text-xs font-bold tracking-widest uppercase mt-1 transition-colors duration-300 ${copiedType === "discord" ? "text-purple-400" : "text-zinc-500 group-hover:text-zinc-300"}`}>
                    {copiedType === "discord" ? "Copied!" : "Click to Copy"}
                  </span>
                </div>
              </button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
