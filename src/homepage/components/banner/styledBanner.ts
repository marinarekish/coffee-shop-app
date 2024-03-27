import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
`;

export const ImageHero = styled.img`
  object-fit: cover;
  width: 100%;
  min-width: 380px;
  max-width: 1440px;
  height: 650px;
  border-radius: 25px;
`;

export const BannerText = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  color: #e1d4c9;
  width: 60%;
  /* max-width: 350px; */
  min-width: 340px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 890px) {
    width: 80%;
    height: 40%;
  }

  @media (max-width: 760px) {
    width: 80%;
    height: 40%;
    top: 10%;
  }

  /* mobile */
  @media (max-width: 380px) {
    width: 90%;
    top: 10%;
    left: 10%;
  }
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
