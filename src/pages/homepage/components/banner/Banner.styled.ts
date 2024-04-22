import styled from "styled-components";
import imgHero from "/img/imgHero.jpg";

export const Container = styled.div`
  background-image: url(${imgHero});
  background-size: cover;
  background-position: center;
  padding: 100px;
  border-radius: 25px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 50px;
    max-width: 786px;
  }

  @media (max-width: 414px) {
    padding: 20px;
    width: 100%;
  }

  @media (max-width: 380px) {
    padding: 30px;
    width: 100%;
  }
`;

export const BannerText = styled.div`
  color: #e1d4c9;
  /* min-width: 340px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Header = styled.h1`
  font-size: 72px;
  line-height: 115%;
  margin-bottom: 1rem;
  color: #e1d4c9;

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

export const Paragraph = styled.p`
  font-size: 22px;
  font-weight: 300;
  line-height: 150%;

  @media (max-width: 769px) {
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 640px) {
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

  @media (max-width: 640px) {
    width: 60%;
    margin: 20px auto;
  }
`;
