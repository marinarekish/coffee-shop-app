import { Link } from "react-router-dom";
import styled from "styled-components";

// main menu
export const MainNav = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin: 0 40px 0 auto;
  gap: 70px;

  @media (max-width: 768px) {
    visibility: hidden;
    /* display: none; */
  }
`;

// side menu
export const SideNav = styled.div`
  visibility: hidden;

  @media (max-width: 768px) {
    visibility: visible;
  }
`;

export const NavLink = styled(Link)`
  font-size: 20px;
`;
export const SideNavContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  min-width: 300px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  background-color: #b6a495df;
  padding-top: 100px;
  padding-left: 40px;
  gap: 30px;
  backdrop-filter: blur(10px);

  ${NavLink} {
    width: 100%;
  }

  ${NavLink}:hover {
    color: #e1d4c9;
    font-weight: 900;
  }
`;

export const MenuButton = styled.button`
  visibility: hidden;

  @media (max-width: 768px) {
    visibility: visible;
    z-index: 333;
  }
`;
