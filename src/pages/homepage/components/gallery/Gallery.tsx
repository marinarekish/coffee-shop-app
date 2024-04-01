import { Photos } from "./Photos";
import { IMAGES } from "../../../../data/galleryData";
import { Accent, Container, Header } from "./styledGallery";

export function Gallery() {
  return (
    <Container>
      <Header>
        Resource is <Accent>the perfect and cozy place</Accent> where you can enjoy a variety of hot beverages, relax,
        catch up with friends, or get some work done.
      </Header>
      <Photos images={IMAGES} />
    </Container>
  );
}
