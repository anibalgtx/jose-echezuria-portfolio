import Navbar from "../components/layout/Navbar";
import Main from "../components/sections/Main";
import Title from "../components/common/Title";
import { motion } from "framer-motion";

export default function Home() {
  const variants =  {
    visible: { opacity: 1},
    hidden: { opacity: 0},
  }
  return (
    <Main>
      <Navbar />
      <div className="absolute top-1/2 transform -translate-y-1/2 space-y-4 md:space-y-8 mx-6">
        <Title />
        <motion.h1 initial="hidden" animate="visible" transition={{duration: 0.5}} variants={variants} className="text-white font-grotesk font-bold md:text-[80px] text-5xl">
          UX/UI Designer | Graphic Designer
        </motion.h1>
        <motion.h2 initial={{x: '-100vw'}} animate={{x: 0}} className="font-grotesk font-normal md:text-3xl text-base">
          Glad you a re here today! Let’s work together and make amazing things
        </motion.h2>
        <motion.button initial={{y: '-100vh'}} animate={{y: 0}} className="bg-black text-white rounded-2xl font-medium sm:text-xl text-base px-8 sm:py-4 py-3">
          See my projects{" "}
        </motion.button>
      </div>
    </Main>
  );
}
