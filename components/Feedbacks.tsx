import { motion } from "framer-motion";

import { fadeIn, textVariant } from "@/utils/motion";
import { testimonials } from "@/constants";

interface Props {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: Props) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1 ">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px] ">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-32 mb-32 bg-black-100 rounded-[20px]">
      <div
        className={`sm:px-16 px-6 sm:py-16 py-10 bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className="text-[#dfd9ff] font-medium lg:text-[25px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[30px]">
            What others say
          </p>
          <h2 className="font-black text-white lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] lg:leading-[78px] mt-2">
            Testimon<span className="text-pink-600">ials.</span>
          </h2>
        </motion.div>
      </div>

      <div className={`sm:px-16 px-6 -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
