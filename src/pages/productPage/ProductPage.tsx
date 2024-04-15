import { Link, useParams } from "react-router-dom";
import { Additive, MenuItem, ProductDetailsKey, Size } from "../../types";
import { normalizedMenuData } from "../../data/menuData";
import {
  Container,
  Header,
  ProductContent,
  ProductText,
  ProductImage,
  CloseButton,
  ProductPrice,
  ImgDiv,
} from "./styledProductPage";
import { SizeChoice } from "./choices/SizeChoice";
import { AdditivesChoice } from "./choices/AdditivesChoice";
import { ChangeEvent, useCallback, useState } from "react";
import { productDetails } from "../../data/menuData";

export function ProductPage() {
  const { title, menuItem } = useParams();
  const product = normalizedMenuData[menuItem as MenuItem][title as string];

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

  function calculateFinalPrice() {
    const initialPrice = +product.price;
    const sizePrice = productDetails[menuItem as ProductDetailsKey].size[selectedSize].price;

    // selectedAdditives = [Additive.First, Additive.Second, Additive.Third]
    const additivesPrice = selectedAdditives.reduce((acc, item) => {
      const currentPrice = productDetails[menuItem as ProductDetailsKey].additives[item].price;

      return (acc += currentPrice);
    }, 0);

    return initialPrice + sizePrice + additivesPrice;
  }

  const finalPrice = calculateFinalPrice();

  return (
    <>
      <Header>{product?.title}</Header>
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
          <hr />
          <p className="small">
            The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty
            points and enjoy your favorite coffee with up to 20% discount.
          </p>
          {/* change later */}
          <Link to={`/menu/${menuItem}`}>
            <CloseButton>close</CloseButton>
          </Link>
        </ProductContent>
      </Container>
    </>
  );
}