"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";
import { services } from "@/constants";

interface Props {
  index: number;
  title: string;
  icon?: string;
}
const ServiceCard = ({ index, title, icon }: Props) => {
  return (
    <div className="xs:w-[250px] w-full hover:scale-110 transition">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] hover:shadow-card transition-shadow "
      >
        <div className="bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="icon"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="about" >
        <p className="text-[#dfd9ff] font-medium llg:text-[25px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[30px]">
          Introduction
        </p>
        <h2 className="font-black text-white lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] lg:leading-[78px] mt-2">
          Overvi<span className="text-pink-600">ew.</span> 
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi everyone, My name is Satyam i am a full stack web developer [MERN]
        and Android Developer with React native I am 15 and I have been working
        as a Software Engineer from last 3 years
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
