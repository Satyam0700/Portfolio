import { motion } from "framer-motion";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";

interface Props {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
  live_link: string;
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link
}: Props) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-primary shadow-card p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[220px] ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 car-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src="/github.png"
                alt="github"
                width={25}
                height={25}
                className="object-contain"
              />
            </div>
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full ml-2 flex justify-center items-center cursor-pointer"
            >
              <Image
                src="/link.svg"
                alt="live demo"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="project" className="mt-32">
        <p className="text-[#dfd9ff] font-medium lg:text-[25px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[30px]">
          My work
        </p>
        <h2 className="font-black text-white lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] lg:leading-[78px] mt-2">
          Projec<span className="text-pink-600">ts.</span>
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I take pride in paying attention to the smallest details and making
          sure that my work is pixel perfect. I am excited to bring my skills
          and experience yo help businesses achieve their goals and create a
          strong online presence.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Works;
