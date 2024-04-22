import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

export const ImageSlider = styled.img`
  width: 480px;
  min-width: 260px;
  height: 480px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 360px;
  }

  @media (max-width: 380px) {
    width: 340px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: #403f3d;
  max-width: 480px;
`;

export const MainText = styled.p`
  font-size: 24px;
  font-weight: bold;
  line-height: 125%;
  color: #403f3d;
`;

export const Dots = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

export const Dot = styled.div`
  width: 40px;
  height: 4px;
  background-color: #c1b6ad;
  border-radius: 20px;
`;

export const DotSelected = styled.div`
  width: 40px;
  height: 4px;
  background-color: #665f55;
  border-radius: 20px;
`;
