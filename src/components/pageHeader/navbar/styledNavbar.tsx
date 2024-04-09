import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
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
`;

export const NavLink = styled(Link)`
  width: 100%;
  font-size: 20px;

  &:hover {
    color: #e1d4c9;
    font-weight: 900;
  }
`;
