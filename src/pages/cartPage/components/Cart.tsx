// cart with items

import { useSelector } from "react-redux";
import { selectCartItems, selectTotalPrice } from "../../../store/slices/cartSlice";
import { CartCard } from "./CartCard";
import { Container, FinalPrice } from "./Cart.styled";

export function Cart() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <Container>
      <div className="flex flex-col gap-4 px-10 ">
        {cartItems.map((params) => (
          <CartCard key={params.id} {...params} />
        ))}
      </div>
      <FinalPrice>
        <h2>Total Price:</h2>
        <h2>${totalPrice}</h2>
      </FinalPrice>
    </Container>
  );
}
