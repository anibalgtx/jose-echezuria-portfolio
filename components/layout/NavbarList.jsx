import React, { useState } from "react";

export const NavBarList = ({ active }) => {
  const items = ["Projects", "What I Do"];
  return (
    <div
      className={`${
        active ? "" : "hidden"
      } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
    >
      <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto lg:gap-16">
        {items.map((item, index) => {
          return (
            <button
              key={index}
              className={`lg:inline-flex lg:w-auto w-full py-2  text-black  items-center justify-center text-base font-bold cursor-pointer`}
            >
              {item}
            </button>
          );
        })}
        <button
          key={3}
          className={`lg:inline-flex lg:w-auto w-full py-2 px-9 bg-black rounded-lg text-white  items-center justify-center text-base font-bold cursor-pointer`}
        >
          Contact Me 
        </button>
      </div>
    </div>
  );
};
