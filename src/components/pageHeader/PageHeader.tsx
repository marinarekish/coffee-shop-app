import { Link } from "react-router-dom";

import logo from "/img/logo1.png";
import { Container, Logo } from "./styledPageHeader";
import { Navbar } from "./navbar/Navbar";

export function PageHeader() {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Navbar />
    </Container>
  );
}
