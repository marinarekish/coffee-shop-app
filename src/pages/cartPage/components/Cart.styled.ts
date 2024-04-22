import { Link } from "react-router-dom";
import styled from "styled-components";

// Common container
export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  padding: 40px;
  /* align-items: center; */
  flex-direction: column;
  gap: 20px;

  position: relative;
`;

// Cart
export const FinalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #403f3d;
  font-size: 36px;
  font-weight: 600;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

// Empty Cart
export const EmptyContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  padding: 40px;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const ToMenuLink = styled(Link)`
  padding: 20px 10px;
  width: 200px;
  border-radius: 100px;
  background-color: #403f3d;
  color: #e1d4c9;
  font-size: 18px;
  font-weight: 600;
  text-align: center;

  &:hover {
    color: #e1d4c9;
    font-weight: 900;
  }
`;

// CartCard
export const ItemCard = styled.section`
  display: flex;
  padding: 10px;
  width: 100%;
  align-items: center;
  position: relative;

  &:hover {
    box-shadow: 8px 8px 24px -24px rgba(66, 68, 90, 1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardImage = styled.img`
  height: 200px;
  width: 150px;
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 300px;
    height: auto;
  }
`;

export const CardContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  row-gap: 10px;
  margin-left: 30px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin: 0;
  }
`;

export const Header = styled.h2`
  font-size: 30px;
  color: #403f3d;
`;

export const CardText = styled.p`
  font-size: 20px;
  color: #403f3d;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Additives = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const AdditiveItem = styled.li`
  background-color: #b0907a;
  color: #e1d4c9;

  padding: 5px 10px;
  font-size: 16px;
  border-radius: 10px;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const QuantityButton = styled.button`
  color: #403f3d;
  padding: 10px 20px;
  cursor: pointer;

  &:not(:disabled):hover {
    background-color: #b0907a;
    color: #e1d4c9;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Price = styled.h2`
  font-size: 26px;
  color: #403f3d;
  margin: 0 20px 0 auto;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const RemoveButton = styled.button`
  font-size: 30px;
  color: #403f3d;
  cursor: pointer;
  padding: 10px 20px;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    background-color: #b0907a;
    color: #e1d4c9;
  }
`;
