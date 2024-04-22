// import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto 20px auto;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;

export const ImgDiv = styled.div`
  height: auto;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  transition: 0.4s;
  transform: scale(1.1, 1.1);

  @media (max-width: 679px) {
    height: 400px;
    object-fit: cover;
  }

  /* @media (max-width: 380px) {
    height: 200px;
    object-fit: cover;
  } */
`;

export const Buy = styled.button`
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 900;
  background-color: #c1b6ad;
  color: #403f3d;
  border-radius: 20px;
  position: absolute;
  left: 20px;
  bottom: 20px;
  transition: 0.3s;
`;

export const Card = styled.div`
  width: 310px;
  height: 520px;
  border-radius: 20px;
  border: 1px solid #c1b6ad;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 5px 10px -9px rgba(193, 182, 173, 1);

    ${CardImage} {
      transform: scale(1, 1);
    }

    ${Buy} {
      background-color: #b0907a;
      color: #403f3d;
      transition: 0.3s;
    }
  }

  @media (max-width: 679px) {
    width: 420px;
    height: 600px;
  }
`;

export const CardContent = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const CardHeader = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 125%;
  color: #403f3d;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  line-height: 150%;
  color: #403f3d;
`;

export const CardPrice = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 125%;
  color: #403f3d;
  position: absolute;
  right: 20px;
  bottom: 25px;
`;
