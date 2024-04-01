import { Banner } from "./components/banner/Banner";
import { Contacts } from "../../components/contacts/Contacts";
import { Gallery } from "./components/gallery/Gallery";
import { PageHeader } from "../../components/navbar/PageHeader";
import { Slider } from "./components/slider/Slider";
import { Container } from "./styledHomepage";

export function HomePage() {
  return (
    <Container>
      <PageHeader />
      <Banner />
      <Slider />
      <Gallery />
      <Contacts />
    </Container>
  );
}
