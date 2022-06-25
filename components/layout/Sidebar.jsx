import { useState } from "react";
import { HamburgerButton } from "./HamburgerButton";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)} 
        >
          x
        </button>
         ) : null}
       <HamburgerButton handleClick={() => setShowSidebar(!showSidebar)} />
  

      <div
        className={`top-0 right-0 w-[35vw] bg-white p-10 fixed h-full rounded-tl-2xl rounded-bl-2xl z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4 mt-10">
        <li>Projects</li>
        <li>What I Do</li>
        <li>Contact Me</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
