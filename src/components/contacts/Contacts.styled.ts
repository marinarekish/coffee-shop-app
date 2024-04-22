import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 10px auto;
  padding: 2rem;
  background-color: #403f3d;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export const HeaderContacts = styled.h1`
  font-size: 72px;
  line-height: 115%;
  margin: 0 auto 10px auto;
  color: #e1d4c9;
  max-width: 560px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 52px;
    line-height: 105%;
  }

  @media (max-width: 380px) {
    font-size: 42px;
    line-height: 115%;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Social = styled.div`
  display: flex;
  gap: 1rem;
  color: #e1d4c9;
`;

export const ContactHeader = styled.h3`
  font-size: 24px;
  line-height: 125%;
  color: #e1d4c9;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
`;

export const InfoLine = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #e1d4c9;
`;

export const ContactText = styled.p`
  font-size: 16px;
  font-weight: 300;
`;
