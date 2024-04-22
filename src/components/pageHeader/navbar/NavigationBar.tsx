import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { SideNavContainer, NavLink, MenuButton, SideNav, MainNav } from "./NavBar.styled";

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MainNav>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/app">Get our App</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </MainNav>

      <SideNav className={isOpen ? "flex" : "hidden md:flex"}>
        <SideNavContainer className="flex md:relative flex-col md:flex-row md:top-0 md:flex md:w-full">
          <NavLink to="/" onClick={toggleNavbar}>
            Home
          </NavLink>
          <NavLink to="/menu" onClick={toggleNavbar}>
            Menu
          </NavLink>
          <NavLink to="/app" onClick={toggleNavbar}>
            Get our App
          </NavLink>
          <hr />
          <NavLink to="/cart" onClick={toggleNavbar}>
            Cart
          </NavLink>
        </SideNavContainer>
      </SideNav>

      <MenuButton className="flex justify-center items-center " onClick={toggleNavbar}>
        <MdMenu className={isOpen ? "hidden" : "flex w-10 h-10"} />
        <MdClose className={isOpen ? "flex z-10 w-10 h-10" : "hidden"} />
      </MenuButton>
    </>
  );
}
