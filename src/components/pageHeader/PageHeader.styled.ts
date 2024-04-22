import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 380px;
  background-color: #e1d4c9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 1100px) {
    padding: 20px 30px;
  }

  @media (max-width: 780px) {
    padding: 20px 20px;
  }
`;

export const Logo = styled.img`
  max-width: 100px;
  height: auto;
`;
