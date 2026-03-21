"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HamburgerIcon, CloseIcon } from "./Icons";
import GlitchText from "./GlitchText";

export default function Navbar({ activeTab, setActiveTab }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Vanguard", href: "#roster" },
    { name: "Rules", href: "#rules" },
    { name: "Join Us", href: "#recruitment" },
  ];

  // Handles Nav Menu & Remove hash stacking 
  // added smooth behavior for smooth scroll
  const handleMenu = (e, href) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    setActiveTab(targetId);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${targetId}`);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-60 transition-all duration-600 text-white 
        ${scrolled ? "backdrop-blur-md   bg-zinc-950/80" : "bg-transparent py-6"} `}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div
            className={`font-heading font-black uppercase tracking-widest transition-all duration-600 ${scrolled ? "text-2xl" : "text-4xl"}`}
          >
            CH
            <GlitchText text={"SN"} className={"text-purple-400"} />
          </div>

          <ul className="hidden md:flex gap-8 font-medium text-zinc-300">
            {links.map((link) => {
              const isActive = activeTab === link.href.replace("#", "");

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="relative font-sub-heading text-xl hover:text-purple-400 transition-colors"
                    onClick={(e) => {
                      handleMenu(e, link.href)
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute -bottom-2 left-0 w-full h-[2px] bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]"
                      />
                    )}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4 absolute right-5 z-60">
            <button
              className="md:hidden text-cyan-400 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <CloseIcon className="w-8 h-8" />
              ) : (
                <HamburgerIcon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {links.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            onClick={(e) => {
              setIsOpen(false);
              handleMenu(e, tab.href)
            }}
            className={`font-sub-heading text-2xl font-scifi-header tracking-widest whitespace-nowrap  ${activeTab === tab.href.replace("#", "") ? "text-purple-400" : "text-white/70"}`}
          >
            {tab.name}
          </Link>
        ))}
      </motion.div>
    </>
  );
}
