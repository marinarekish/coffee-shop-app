import { useParams } from "react-router-dom";
import { EntityType, menu } from "../../../data/menuData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardImage,
  CardPrice,
  ImgDiv,
  MenuContainer,
} from "./styledMenu";

export function Menu() {
  const { entityType } = useParams();

  return (
    <MenuContainer>
      {menu[entityType as EntityType].map(({ title, imgUrl, description, price }) => (
        <Card>
          <ImgDiv>
            <CardImage src={imgUrl} />
          </ImgDiv>
          <CardContent>
            <CardHeader>{title}</CardHeader>
            <CardDescription>{description}</CardDescription>
          </CardContent>
          <CardPrice>$ {price}</CardPrice>
        </Card>
      ))}
    </MenuContainer>
  );
}
