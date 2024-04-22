import { MenuItem } from "../../types";
import { BtnDiv, Container, MenuLink } from "./MenuPage.styled";
import { Outlet } from "react-router-dom";
import { FiCoffee } from "react-icons/fi";
import { TbTeapot } from "react-icons/tb";
import { RiCake3Line } from "react-icons/ri";
import { Header, Accent } from "../../styled";

export function MenuPage() {
  return (
    <Container>
      <Header className="px-10">
        Behind each of our cups hides an <Accent>amazing surprise</Accent>
      </Header>
      <BtnDiv>
        {/* <MenuLink to={MenuItem.TOP_CHOICES}>Today's top choices</MenuLink> */}
        <MenuLink to={MenuItem.COFFEES}>
          <FiCoffee />
          Coffee
        </MenuLink>
        <MenuLink to={MenuItem.TEAS}>
          <TbTeapot />
          Tea
        </MenuLink>
        <MenuLink to={MenuItem.DESSERTS}>
          <RiCake3Line />
          Dessert
        </MenuLink>
      </BtnDiv>
      <Outlet />
    </Container>
  );
}
