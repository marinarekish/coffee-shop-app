import { useDispatch, useSelector } from "react-redux";
import { Additive, MenuItem, Size } from "../../../types";
import { selectAdditivesByMenuItem } from "../../../store/slices/dataSlice";
import {
  CardImage,
  CardDetails,
  Header,
  CardText,
  Additives,
  AdditiveItem,
  ItemCard,
  Quantity,
  QuantityButton,
  RemoveButton,
  CardContent,
  Price,
} from "./Cart.styled";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../../store/slices/cartSlice";

type CartCardProps = {
  title: string;
  imgUrl: string;
  quantity: number;
  finalPrice: number;
  selectedAdditives: Additive[];
  selectedSize: Size;
  category: MenuItem;
  id: string;
};

export function CartCard({
  title,
  imgUrl,
  quantity,
  finalPrice,
  selectedAdditives,
  selectedSize,
  category,
  id,
}: CartCardProps) {
  const dispatch = useDispatch();
  const additives = useSelector(selectAdditivesByMenuItem(category));
  const isQuantityDecreasable = quantity > 1;

  function handleRemoveFromCart() {
    dispatch(removeFromCart(id));
  }

  function handleDecreaseQuantity() {
    if (!isQuantityDecreasable) {
      return;
    }

    dispatch(decreaseQuantity(id));
  }

  function handleIncreaseQuantity() {
    dispatch(increaseQuantity(id));
  }

  return (
    <>
      <ItemCard>
        <CardImage src={imgUrl} />
        <CardContent>
          <CardDetails>
            <Header>{title}</Header>
            <CardText>Size {selectedSize}</CardText>
            <CardText>Additives </CardText>
            <Additives>
              {selectedAdditives.length ? (
                selectedAdditives.map((additive) => {
                  const additiveValue = additives[additive].text;
                  return <AdditiveItem key={additiveValue}>{additiveValue}</AdditiveItem>;
                })
              ) : (
                <AdditiveItem>-</AdditiveItem>
              )}
            </Additives>
          </CardDetails>

          <Quantity>
            <QuantityButton onClick={handleDecreaseQuantity} disabled={!isQuantityDecreasable}>
              -
            </QuantityButton>
            <CardText>{quantity}</CardText>
            <QuantityButton onClick={handleIncreaseQuantity}>+</QuantityButton>
          </Quantity>

          <Price>$ {finalPrice * quantity}</Price>
        </CardContent>
        <RemoveButton onClick={handleRemoveFromCart}>&times;</RemoveButton>
      </ItemCard>
      <hr />
    </>
  );
}
