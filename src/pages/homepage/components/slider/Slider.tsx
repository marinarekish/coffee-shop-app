import { SliderCard } from "./SliderCard";
import { SLIDES } from "../../../../data/sliderData";
import { Container, Header, Accent } from "./styledSlider";

export function Slider() {
  return (
    <Container>
      <Header>
        Our <Accent>client&#39;s</Accent> choice
      </Header>
      <SliderCard choices={SLIDES} />
    </Container>
  );
}
