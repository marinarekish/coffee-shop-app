import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  padding: 0 40px;
  row-gap: 2rem;
  align-items: center;

  @media (max-width: 875px) {
    flex-direction: column;
    align-items: center;
  }
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

  @media (max-width: 1200px) {
    width: 450px;
  }

  @media (max-width: 380px) {
    width: 340px;
  }
`;
