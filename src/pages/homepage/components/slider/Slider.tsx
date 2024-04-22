import { SliderCard } from "./SliderCard";
import { SLIDES } from "../../../../data/sliderData";
import { Container } from "./Slider.styled";
import { Header, Accent } from "../../../../styled";

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
