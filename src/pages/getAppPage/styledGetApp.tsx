import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  padding: 0 40px;
  row-gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.h1`
  font-size: 60px;
  line-height: 125%;
  color: #403f3d;
  margin: 0;

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

export const Accent = styled.span`
  color: #b0907a;
  font-style: italic;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

export const Text = styled.p`
  font-size: 24px;
  line-height: 150%;
  margin: 0;
  padding: 0;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 20px;
  gap: 20px;
`;

export const Image = styled.img`
  width: 630px;

  /* notepade */
  @media (max-width: 1200px) {
    width: 540px;
  }

  /* mobile */
  @media (max-width: 380px) {
    width: 348px;
  }
`;
