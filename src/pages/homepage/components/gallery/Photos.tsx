import { Image } from "../../../../data/galleryData";
import { Gallery, PhotoDiv } from "./Gallery.styled";

type PhotosProps = {
  images: Image[];
};

export function Photos({ images }: PhotosProps) {
  return (
    <Gallery>
      {images.map((image, index) => (
        <PhotoDiv key={index} src={image.src}>
          {/* <Photo src={image.src} /> */}
        </PhotoDiv>
      ))}
    </Gallery>
  );
}
