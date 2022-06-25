import React, { useState } from "react";
import { motion } from "framer-motion";

export const NavBarList = () => {
  const items = ["Projects", "What I Do"];
  return (
    <div
      className={`hidden w-full lg:inline-flex lg:flex-grow lg:w-auto`}
    >
      <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto lg:gap-16">
        {items.map((item, index) => {
          return (
            <motion.button
              key={index}
              className={`lg:inline-flex lg:w-auto w-full py-2  text-black  items-center justify-center text-base font-bold cursor-pointer`}
              animate={{color: ['#FFFFFF', '#000000']}}
              transition={{type: 'tween'}}
              whileHover={{color: '#FFFFFF'}}
            > 
              {item}
            </motion.button>
          );
        })}
        <motion.button
          key={3}
          className={`lg:inline-flex lg:w-auto w-full py-2 px-9 bg-black rounded-lg text-white  items-center justify-center text-base font-bold cursor-pointer`}
          whileHover={{scale: 1.1}}
        >
          Contact Me 
        </motion.button>
      </div>
    </div>
  );
};
