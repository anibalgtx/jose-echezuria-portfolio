import { motion } from "framer-motion";

const Main = ({ children }) => {
  return (
    <section className="h-screen bg-gradient-to-r from-purple-400 to-purple-300 relative min-h-[600px] overflow-hidden">
      <div className="md:container md:mx-auto mx-6">{children}</div>
      <motion.div
        initial={{ scaleX: 3, y: "100px" }}
        animate={{ scaleX: 1, y: 0 }}
        transition={{ type: "tween", duration: 1 }}
        className="absolute bottom-0 aspect-[5/1] w-full bg-no-repeat bg-center bg-cover bg-wave-divider"
      ></motion.div>
    </section>
  );
};

export default Main;
