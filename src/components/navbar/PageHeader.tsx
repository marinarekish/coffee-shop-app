import { MdMenu } from "react-icons/md";
import logo from "/img/logo1.png";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import { Container, Logo } from "./styledPageHeader";

export function PageHeader() {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Button variant="ghost">
        <MdMenu className="w-8 h-8" />
      </Button>
    </Container>
  );
}

// add open menu toggle
