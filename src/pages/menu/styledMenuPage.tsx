import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  row-gap: 2rem;
  align-items: center;
`;

export const Header = styled.h1`
  font-size: 60px;
  line-height: 125%;
  margin: 1rem auto;
  color: #403f3d;
  text-align: center;
  margin: 0 auto;
  max-width: 70%;

  /* notepade */
  @media (max-width: 768px) {
    font-size: 42px;
    line-height: 105%;
  }

  /* mobile */
  @media (max-width: 380px) {
    font-size: 32px;
    line-height: 125%;
  }
`;

export const Accent = styled.span`
  color: #b0907a;
  font-style: italic;
`;

export const BtnDiv = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin: 0 auto;
`;

export const MenuLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  align-items: center;
  border: 1px solid #e1d4c9;
  border-radius: 100px;

  &.active {
    color: #e1d4c9;
    background: #403f3d;
    border: none;
  }
`;

// style={({ isActive }) => ({
//   color: isActive ? "#E1D4C9" : "",
//   background: isActive ? "#403F3D" : "",
// })}
