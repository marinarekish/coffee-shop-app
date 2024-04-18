import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  padding: 20px;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.h1`
  font-size: 60px;
  line-height: 125%;
  margin: 1rem auto;
  color: #403f3d;
  text-align: center;
  margin: 0 auto;
  max-width: 70%;

  /* notepade */
  @media (max-width: 768px) {
    font-size: 42px;
    line-height: 105%;
  }

  /* mobile */
  @media (max-width: 380px) {
    font-size: 32px;
    line-height: 125%;
  }
`;

export const ImgDiv = styled.div`
  height: 640px;
  min-width: 350px;
  border-radius: 20px;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const ProductButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ProductContent = styled.div`
  padding: 20px;
  display: flex;
  /* height: 640px; */
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const ProductText = styled.p`
  font-size: 26px;
  line-height: 150%;
  color: #403f3d;
  margin-bottom: 20px;
`;

export const ChoiceDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ChoiceLabel = styled.label`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid #c1b6ad;
  font-size: 18px;
  background: none;
  color: #403f3d;
  position: relative;
  cursor: pointer;
`;

export const Input = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:checked + ${ChoiceLabel} {
    background: #403f3d;
    color: #c1b6ad;
  }
`;

export const ProductPrice = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 125%;
  color: #403f3d;
  margin-bottom: 0;
`;

export const CloseButton = styled.button`
  border: 1px solid #665f55;
  border-radius: 20px;
  background: none;
  text-align: center;
  padding: 10px 20px;

  &:hover {
    background: #403f3d;
    color: #c1b6ad;
  }
`;

export const BuyButton = styled.button`
  border-radius: 20px;
  background: #403f3d;
  color: #c1b6ad;
  text-align: center;
  padding: 10px 20px;

  &:hover {
    background: #403f3d;
    color: #c1b6ad;
  }
`;

export const Disclaimer = styled.p`
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #403f3d;
`;
