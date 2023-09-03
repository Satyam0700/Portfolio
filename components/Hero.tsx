"use client";

import { motion } from "framer-motion";

import { styles } from "@/styles";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`sm:px-16 px-6 absolute inset-0 top-[250px] max-w7 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1
            className={"font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-4"}
          >
            Hi, I'm <span className="text-pink-600">SATYAM </span>
          </h1>
          <div className="text-transparent font-bold lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: ["Full-Stack Developer.", "UI/UX Designer", "Website Designer."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
          <p
            className={"text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[18px] text-[16px] lg:leading-[30px] mt-2"}
          >
            I'm a full-stack Developer with extensive experience for over 3 years.  <br className="sm:block hidden" />
            I develope user interfaces, web application and mobile application.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
