import { motion } from "framer-motion";
import Subtitle from "../common/Subtitle";

const Projects = ({ children }) => {
  return (
    <section className="bg-slate-800 relative min-h-[600px] overflow-x-hidden">
      <div className="md:container md:mx-auto mx-6">
        <div className="mx-6">
        <Subtitle text={'MY PROJECTS'}/>
        </div>
      </div>
    </section>
  );
};

export default Projects;
