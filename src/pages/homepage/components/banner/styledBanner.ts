import styled from "styled-components";
import imgHero from "/img/imgHero.jpg";

export const Container = styled.div`
  background-image: url(${imgHero});
  background-size: cover;
  background-position: center;
  padding: 100px;
  /* width: 100%; */
  border-radius: 25px;
`;

export const BannerText = styled.div`
  color: #e1d4c9;
  min-width: 340px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.h1`
  font-size: 72px;
  line-height: 115%;
  margin-bottom: 1rem;
  color: #e1d4c9;

  @media (max-width: 768px) {
    font-size: 68px;
  }

  @media (max-width: 505px) {
    font-size: 56px;
  }

  /* mobile */
  @media (max-width: 379px) {
    font-size: 42px;
  }
`;

export const Accent = styled.span`
  color: #b0907a;
  font-style: italic;
`;

export const Paragraph = styled.p`
  max-width: 80%;
  font-size: 22px;
  font-weight: 300;
  line-height: 150%;

  @media (max-width: 769px) {
    font-size: 20px;
  }

  @media (max-width: 505px) {
    font-size: 18px;
  }

  @media (max-width: 379px) {
    font-size: 16px;
  }
`;

export const BannerButton = styled.button`
  margin-top: 40px;
  padding: 20px;
  width: 200px;
  border-radius: 100px;
  background-color: #e1d4c9;
  color: #403f3d;
  font-size: 16px;
  font-weight: 600;
`;
