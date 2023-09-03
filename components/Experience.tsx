"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "../utils/motion";
import { experiences } from "@/constants";

const ExperienceCard = ({ experience }: any) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#050816", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point: any, index: number) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="work" className="mt-32">
        <p className="text-[#dfd9ff] font-medium lg:text-[25px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[30px]">
          What I have done so far
        </p>
        <h2 className="font-black text-white lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] lg:leading-[78px] mt-2">
          Work Expe<span className="text-pink-600">rience.</span>
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
