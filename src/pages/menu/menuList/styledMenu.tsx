import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 0 auto;
  padding: 0 2rem;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 310px;
  height: 506px;
  border-radius: 20px;
  border: 1px solid #c1b6ad;
  display: flex;
  flex-direction: column;
  position: relative;
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

  &:hover {
    transform: scale(1.2, 1.2);
  }
`;

export const CardContent = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
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
  bottom: 20px;
  right: 20px;
`;
