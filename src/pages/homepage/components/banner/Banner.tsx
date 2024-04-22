import { Link } from "react-router-dom";
import { Container, BannerText, Header, Paragraph, BannerButton } from "./Banner.styled";
import { Accent } from "../../../../styled";

export function Banner() {
  return (
    <Container>
      <BannerText>
        <Header>
          <Accent>Enjoy</Accent> premium coffee at our charming cafe
        </Header>
        <Paragraph>
          With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination
          for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.
        </Paragraph>
        <BannerButton>
          <Link to="/menu">See Menu</Link>
        </BannerButton>
      </BannerText>
    </Container>
  );
}
