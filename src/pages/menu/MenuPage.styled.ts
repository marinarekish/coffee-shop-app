import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
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
