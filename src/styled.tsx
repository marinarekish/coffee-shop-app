import styled from "styled-components";

export const Header = styled.h1`
  font-size: 60px;
  line-height: 125%;
  margin: 1rem auto;
  color: #403f3d;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 58px;
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 46px;
  }

  @media (max-width: 379px) {
    font-size: 42px;
  }
`;

export const Accent = styled.span`
  color: #b0907a;
  font-style: italic;
`;
