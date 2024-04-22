import { EmptyContainer, ToMenuLink } from "./Cart.styled";
import { Accent, Header } from "../../../styled";

export function EmptyCart() {
  return (
    <EmptyContainer>
      <Header>
        Your cart is empty. <br /> Consider checking out <Accent>our menu</Accent>
      </Header>
      <ToMenuLink to="/menu">Menu</ToMenuLink>
    </EmptyContainer>
  );
}
