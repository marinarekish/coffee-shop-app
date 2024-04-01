import { Image } from "../../../../data/galleryData";
import { Gallery, Photo } from "./styledGallery";

type PhotosProps = {
  images: Image[];
};

export function Photos({ images }: PhotosProps) {
  return (
    <Gallery>
      {images.map((image, index) => (
        <Photo key={index} src={image.src} />
      ))}
    </Gallery>
  );
}
