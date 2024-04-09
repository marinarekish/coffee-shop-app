import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { NavContainer, NavLink } from "./styledNavbar";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={isOpen ? "flex" : " hidden md:flex"}>
        <NavContainer className="flex md:relative flex-col md:flex-row md:top-0 md:flex md:w-full">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/app">Get our App</NavLink>
        </NavContainer>
      </nav>

      <div className="md:hidden">
        <button className="flex justify-center items-center" onClick={toggleNavbar}>
          <MdMenu className={isOpen ? "hidden" : "flex w-10 h-10"} />
          <MdClose className={isOpen ? "flex z-10 w-10 h-10" : "hidden"} />
        </button>
      </div>
    </>
  );
}
