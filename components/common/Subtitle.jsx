import { motion } from "framer-motion";

function Subtitle({text}) {
  return (
    <h1
      className="before:content-[''] before:inline-block before:w-20 before:bg-white before:h-[1px] text-white flex items-center gap-2 font-bold text-2xl md:text-4xl mt-16"
    >
      {text}
    </h1>
  );
}

export default Subtitle;
