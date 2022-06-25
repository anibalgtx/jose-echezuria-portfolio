import { NavBarList } from "./NavbarList";
import { useState } from "react";
import Logo from "../common/Logo";
import { HamburgerButton } from "./HamburgerButton";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="flex items-center flex-wrap p-3 relative">
      <a className="inline-flex items-center p-2 mx-auto lg:static lg:transform-none absolute left-1/2 transform -translate-x-1/2">
        <Logo></Logo>
      </a>
      <Sidebar />
      <NavBarList active={active}></NavBarList>
    </nav>
  );
};

export default Navbar;
