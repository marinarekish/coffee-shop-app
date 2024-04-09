import { Navigate, useParams } from "react-router-dom";
import { MenuItem, menu } from "../../../data/menuData";
import {
  // Buy,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardImage,
  CardPrice,
  ImgDiv,
  MenuContainer,
} from "./styledMenu";
import { MouseEvent } from "react";

export function Menu() {
  const { menuItem } = useParams();

  const currentMenuItem = menu[menuItem as MenuItem];
  if (!currentMenuItem) {
    return <Navigate to="../" replace />;
  }

  function menuClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    console.log(e.currentTarget.dataset.value);
    // console.log(`you wanna see ${title} card`);
  }

  return (
    <MenuContainer>
      {currentMenuItem.map(({ title, imgUrl, description, price }) => (
        <Card data-value={title} key={title} onClick={menuClick}>
          <ImgDiv>
            <CardImage src={imgUrl} />
          </ImgDiv>
          <CardContent>
            <CardHeader>{title}</CardHeader>
            <CardDescription>{description}</CardDescription>
          </CardContent>
          <CardPrice>$ {price}</CardPrice>
          {/* <Buy>Add</Buy> */}
        </Card>
      ))}
    </MenuContainer>
  );
}
