import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PhotoDiv = styled.img`
  width: 600px;
  height: 600px;
  overflow: hidden;
  border-radius: 15px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 5500px;
    height: 590px;
  }

  @media (max-width: 380px) {
    width: 340px;
    height: 490px;
  }
`;

export const Photo = styled.img`
  transition: 0.4s;
  transform: scale(1.1, 1.1);

  &:hover {
    transform: scale(1, 1);
  }
`;
