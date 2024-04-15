import { useParams } from "react-router-dom";
import { ChangeEvent } from "react";

import { ProductDetailsKey, Size } from "../../../types";

import { productDetails } from "../../../data/menuData";
import { ChoiceLabel, ChoiceDiv, ProductText, Input } from "../styledProductPage";

type SizeChoiceProps = {
  selectedSize: Size;
  handleSelectSize: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function SizeChoice({ selectedSize, handleSelectSize }: SizeChoiceProps) {
  const { menuItem } = useParams();
  const currentCategory = productDetails[menuItem as ProductDetailsKey].size;

  return (
    <div>
      <ProductText>Size</ProductText>
      <ChoiceDiv>
        {Object.entries(currentCategory).map(([key, value]) => (
          <div key={key}>
            <Input
              type="radio"
              id={key}
              name="size"
              value={key}
              checked={selectedSize === key}
              onChange={handleSelectSize}
            />
            <ChoiceLabel htmlFor={key}>
              {value.icon}
              {value.text}
            </ChoiceLabel>
          </div>
        ))}
      </ChoiceDiv>
    </div>
  );
}
