import { Banner } from "./components/banner/Banner";
import { Gallery } from "./components/gallery/Gallery";
import { Slider } from "./components/slider/Slider";
import { Container } from "./Homepage.styled";

export function HomePage() {
  return (
    <Container>
      <Banner />
      <Slider />
      <Gallery />
    </Container>
  );
}
