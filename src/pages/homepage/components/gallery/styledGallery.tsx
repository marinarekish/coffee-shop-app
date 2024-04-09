import styled from "styled-components";

export const Container = styled.div`
  /* position: relative; */
  width: 90%;
  margin: 2rem auto;
  padding: 2rem;
`;

export const Header = styled.h1`
  font-size: 60px;
  line-height: 125%;
  margin-bottom: 1rem;
  color: #403f3d;

  @media (max-width: 768px) {
    font-size: 42px;
    line-height: 105%;
  }

  @media (max-width: 380px) {
    font-size: 32px;
    line-height: 125%;
  }
`;

export const Accent = styled.span`
  color: #b0907a;
  font-style: italic;
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 2rem auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PhotoDiv = styled.div`
  max-width: 600px;
  width: 45%;
  overflow: hidden;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 400px;
    height: auto;
    max-height: 430px;
  }
`;

export const Photo = styled.img`
  max-height: 580px;
  object-fit: cover;
  transition: 0.4s;
  transform: scale(1.1, 1.1);

  &:hover {
    transform: scale(1, 1);
  }
`;
