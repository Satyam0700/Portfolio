"use client";

import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Tech from "@/components/Tech";
import Works from "@/components/Works";
import Feedbacks from "@/components/Feedbacks";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative z-0 bg-[#00040f]">
      <div className="bg-hero-pattern bg-no-repeat bg-contain bg-right">
        <Navbar />
        <Hero />
      </div>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
      >
        <About />
        <Experience />
      </motion.div>

      <Tech />

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
      >
        <Works />
        <Feedbacks />
        <Contact />
      </motion.div>
    </main>
  );
}
