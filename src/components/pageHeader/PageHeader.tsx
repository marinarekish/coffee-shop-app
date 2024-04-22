import { Link } from "react-router-dom";

import logo from "/img/logo1.png";
import { Container, Logo } from "./PageHeader.styled";
import { NavigationBar } from "./navbar/NavigationBar";

export function PageHeader() {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <NavigationBar />
    </Container>
  );
}
