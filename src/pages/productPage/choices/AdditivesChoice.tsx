import { useParams } from "react-router-dom";
import { ChangeEvent } from "react";

import { productDetails } from "../../../data/menuData";
import { Additive, MenuItem } from "../../../types";

import { ChoiceDiv, ChoiceLabel, Input, ProductText } from "../ProductPage.styled";

type AdditiveChoiceProps = {
  selectedAdditives: Additive[];
  handleSelectAdditive: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function AdditivesChoice({ selectedAdditives, handleSelectAdditive }: AdditiveChoiceProps) {
  const { menuItem } = useParams();

  const currentCategory = productDetails[menuItem as MenuItem].additives;

  return (
    <div>
      <ProductText>Additives</ProductText>
      <ChoiceDiv>
        {Object.entries(currentCategory).map(([key, value]) => (
          <div key={key}>
            <Input
              type="checkbox"
              id={key}
              value={key}
              checked={selectedAdditives.includes(key as Additive)}
              onChange={handleSelectAdditive}
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
