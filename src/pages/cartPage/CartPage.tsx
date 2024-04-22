import { EmptyCart } from "./components/EmptyCart";
import { Cart } from "./components/Cart";
import { useSelector } from "react-redux";
import { selectIsCartEmpty } from "../../store/slices/cartSlice";

export function CartPage() {
  const isCartEmpty = useSelector(selectIsCartEmpty);

  if (isCartEmpty) {
    return <EmptyCart />;
  }

  return <Cart />;
}
