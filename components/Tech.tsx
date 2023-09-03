import { technologies } from "@/constants";
import Image from "next/image";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap mt-32 px-4 justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="flex flex-col items-center justify-center gap-5">
          <div
            className="w-24 h-24 bg-[#fef4f5] rounded-full flex items-center justify-center"
            key={technology.name}
          >
            <Image
              src={technology.icon}
              alt={technology.name}
              width={60}
              height={60}
            />
          </div>
          <p>{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tech;
