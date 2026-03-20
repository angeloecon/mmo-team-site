'use client'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Roster from "@/components/Roster";
import Rules from "@/components/Rules";
import Recruitment from "@/components/Recruitment";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home")

  const sectionIds = ["home", "roster", "rules", "recruitment"];

 useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-100px 0px -50% 0px" 
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-zinc-900 min-h-screen scroll-smooth">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
      
      <div id="home">
        <Hero />
      </div>

      <div id="roster">
        <Roster />
      </div>

      <div id="rules">
        <Rules />
      </div>

      <div id="recruitment">
        <Recruitment />
      </div>

      <Footer />
    </main>
  );
}