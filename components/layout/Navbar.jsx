import { NavBarList } from "./NavbarList";
import { useState } from "react";
import Logo from "../common/Logo";
import { HamburgerButton } from "./HamburgerButton";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="flex items-center flex-wrap p-3">
      <a className="inline-flex items-center p-2 mr-4 ">
        <Logo></Logo>
      </a>
      <HamburgerButton handleClick={handleClick}></HamburgerButton>
      <NavBarList active={active}></NavBarList>
    </nav>
  );
};

export default Navbar;
