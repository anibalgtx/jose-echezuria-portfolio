import { motion } from "framer-motion";

function Title() {
  return (
    <motion.h1
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      className="before:content-[''] before:inline-block before:w-20 before:bg-black before:h-[1px] flex items-center gap-2 font-medium text-base"
    >
      JOSE ECHEZURIA
    </motion.h1>
  );
}

export default Title;
