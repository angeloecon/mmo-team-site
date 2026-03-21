"use client"
import {useEffect, useState} from "react";
import { motion } from "framer-motion";

export default function Particles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 2, // -- create random sizes between 2px and 6px
      left: `${Math.random() * 100}%`, // -- horizontal position
      top: `${Math.random() * 100}%`, // -- vertical position
      duration: Math.random() * 5 + 5, // -- float speed (5 to 10 seconds)
      delay: Math.random() * 2, // -- start delay
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400/40 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
