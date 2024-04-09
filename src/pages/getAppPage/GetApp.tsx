import { Link } from "react-router-dom";
import { Accent, Buttons, Container, Content, Header, Image, Text } from "./styledGetApp";

export function GetApp() {
  return (
    <>
      <Container>
        <Content>
          <Header>
            <Accent>Download</Accent> our apps to start ordering
          </Header>
          <Text>
            Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever
            you are
          </Text>
        </Content>
        <Image src="/img/mobile.png" />
      </Container>
      <Buttons>
        <Link to="https://www.apple.com/pl/app-store/" target="blank">
          <img src="/img/appstore.png" />
        </Link>
        <Link to="https://play.google.com/store/games?pli=1" target="blank">
          <img src="/img/googleplay.png" />
        </Link>
      </Buttons>
    </>
  );
}
