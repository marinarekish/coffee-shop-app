import { Image } from "../../../../data/galleryData";
import { Gallery, Photo, PhotoDiv } from "./styledGallery";

type PhotosProps = {
  images: Image[];
};

export function Photos({ images }: PhotosProps) {
  return (
    <Gallery>
      {images.map((image, index) => (
        <PhotoDiv key={index}>
          <Photo src={image.src} />
        </PhotoDiv>
      ))}
    </Gallery>
  );
}
