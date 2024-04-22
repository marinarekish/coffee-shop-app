import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 } from "uuid";

import { addToCart } from "../../store/slices/cartSlice";

import { Additive, MenuItem, Size } from "../../types";
import {
  Container,
  ProductContent,
  ProductText,
  ProductImage,
  CloseButton,
  ProductPrice,
  ImgDiv,
  BuyButton,
  ProductButtons,
  Disclaimer,
} from "./ProductPage.styled";

import { SizeChoice } from "./choices/SizeChoice";
import { AdditivesChoice } from "./choices/AdditivesChoice";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { selectCategoryByMenuItem } from "../../store/slices/dataSlice";
import { Header } from "../../styled";

export function ProductPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, menuItem } = useParams();

  const { size, additives, products } = useSelector(selectCategoryByMenuItem(menuItem as MenuItem));
  const product = products[title as string];

  const [selectedSize, setSelectedSize] = useState(Size.S);
  const [selectedAdditives, setSelectedAdditives] = useState<Additive[]>([]);

  const handleSelectSize = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSelectedSize(value as Size);
  }, []);

  const handleSelectAdditive = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;

      const chosenAdditives = new Set<Additive>(selectedAdditives);

      if (chosenAdditives.has(value as Additive)) {
        chosenAdditives.delete(value as Additive);
      } else {
        chosenAdditives.add(value as Additive);
      }

      setSelectedAdditives(Array.from(chosenAdditives));
    },
    [selectedAdditives]
  );

  const calculateFinalPrice = () => {
    const initialPrice = +product.price;
    const sizePrice = size[selectedSize].price;

    // selectedAdditives = [Additive.First, Additive.Second, Additive.Third]
    const additivesPrice = selectedAdditives.reduce((acc, item) => {
      const currentPrice = additives[item].price;

      return (acc += currentPrice);
    }, 0);

    return initialPrice + sizePrice + additivesPrice;
  };

  const finalPrice = calculateFinalPrice();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        finalPrice,
        selectedSize,
        selectedAdditives,
        title: product.title,
        imgUrl: product.imgUrl,
        category: menuItem as MenuItem,
        id: v4(),
      })
    );

    navigate(-1);
  };

  return (
    <>
      <Header>{product.title}</Header>
      <Container>
        <ImgDiv>
          <ProductImage src={product.imgUrl} />
        </ImgDiv>
        <ProductContent>
          <ProductText>{product.description}</ProductText>
          <SizeChoice selectedSize={selectedSize} handleSelectSize={handleSelectSize} />
          <AdditivesChoice selectedAdditives={selectedAdditives} handleSelectAdditive={handleSelectAdditive} />
          <div className="flex justify-between">
            <ProductPrice>Total:</ProductPrice>
            <ProductPrice>$ {finalPrice.toFixed(2)}</ProductPrice>
          </div>
          <Disclaimer>
            <IoIosInformationCircleOutline className="w-10 h-10" />
            The cost is not final. Download our mobile app to see possible discounts and promos.
            <br />
            Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
          </Disclaimer>
          <ProductButtons>
            <Link to={`/menu/${menuItem}`}>
              <CloseButton>back to menu</CloseButton>
            </Link>
            <BuyButton onClick={handleAddToCart}>add to cart</BuyButton>
          </ProductButtons>
        </ProductContent>
      </Container>
    </>
  );
}
