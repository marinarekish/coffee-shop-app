import { Link } from "react-router-dom";
import { Accent, Container, BannerText, Header, Paragraph, BannerButton } from "./styledBanner";

export function Banner() {
  return (
    <Container>
      {/* <ImageHero src="/img/imgHero.jpg" /> */}
      <BannerText>
        <Header>
          <Accent>Enjoy</Accent> premium coffee at our charming cafe
        </Header>
        <Paragraph>
          With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination
          for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.
        </Paragraph>
        <Link to="/menu">
          <BannerButton>See Menu</BannerButton>
        </Link>
      </BannerText>
    </Container>
  );
}
