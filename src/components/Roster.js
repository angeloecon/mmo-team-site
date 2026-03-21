 "use client";

import { motion } from "framer-motion";
import Image from "next/image";
import teamData from "@/data/team.json";
import SectionTitle from "./Title/SectionTitle";

export default function Roster() {
  return (
    <section className="py-24 bg-zinc-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        
        <SectionTitle
          firstWord={"The"}
          secondWord={"Vanguard"}
          sentence={"Meet the highest ranking officers of our team."}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.leaders.map((member, index) => {
            const isCaptain = member.role === "Boss Leader" || member.role === "Team Captain";

            return (
              <motion.div 
                key={member.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative h-[480px] w-full rounded-2xl bg-zinc-900 overflow-hidden transition-all duration-500 hover:-translate-y-3
                  ${isCaptain ? "border-2 border-purple-500 shadow-[0_0_30px_rgba(167,139,250,0.3)]" : "border border-zinc-800 hover:border-purple-400 shadow-xl"}
                `}
              >

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                 
                <div className="absolute inset-x-0 bottom-[120px] mx-auto w-56 h-72 z-10 transition-all duration-700 ease-out group-hover:opacity-40 group-hover:scale-105 group-hover:-translate-y-4 group-active:opacity-40">
                  <Image 
                    src={member.trainerImg} 
                    alt={member.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain object-bottom"
                  />
                </div>

                 
                <div className={`absolute inset-x-0 bottom-[80px] mx-auto w-64 h-64 z-30 opacity-0 scale-75 translate-y-10 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-4 group-active:opacity-100 group-active:scale-110 drop-shadow-[0_0_25px_rgba(167,139,250,0.6)] pointer-events-none`}>
                   <Image 
                    src={member.pokemonImg} 
                    alt={member.signature} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain object-bottom"
                  />
                </div>
 
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent pt-16 pb-6 px-6 z-20 ">
                  <h3 className="font-heading text-3xl text-white mb-1 drop-shadow-md text-center break-all px-4">{member.name}</h3>
                  <p className="font-subheading text-lg text-purple-400 mb-2 uppercase tracking-widest text-center">{member.role}</p>
          
                  <p className="font-sans text-zinc-400 text-sm text-center italic mx-auto max-w-[90%]">
                    "{member.quote}"
                  </p>
                </div>

                {/* Mobile Hint */}
                <div className="absolute top-4 right-4 z-40 md:hidden">
                  <p className="text-[10px] text-purple-200 font-sans uppercase tracking-widest bg-purple-900/50 px-2 py-1 rounded-full border border-purple-500/30 backdrop-blur-md">
                    Tap Card
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}