import { PageHeader } from "../../components/navbar/PageHeader";
import { EntityType } from "../../types";
import { Accent, BtnDiv, Container, Header, MenuLink } from "./styledMenuPage";
import { Outlet } from "react-router-dom";
import { FiCoffee } from "react-icons/fi";
import { TbTeapot } from "react-icons/tb";
import { RiCake3Line } from "react-icons/ri";

export default function MenuPage() {
  return (
    <Container>
      <PageHeader />
      <Header>
        Behind each of our cups hides an <Accent>amazing surprise</Accent>
      </Header>
      <BtnDiv>
        <MenuLink to={EntityType.COFFEE}>
          <FiCoffee />
          Coffee
        </MenuLink>
        <MenuLink to={EntityType.TEA}>
          <TbTeapot />
          Tea
        </MenuLink>
        <MenuLink to={EntityType.DESSERT}>
          <RiCake3Line />
          Dessert
        </MenuLink>
      </BtnDiv>
      <Outlet />
    </Container>
  );
}
