import { Link, Navigate, useParams } from "react-router-dom";
import {
  Buy,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardImage,
  CardPrice,
  ImgDiv,
  MenuContainer,
} from "./Menu.styled";
import { MenuItem } from "../../../types";
import { useSelector } from "react-redux";
import { selectCategoryByMenuItem } from "../../../store/slices/dataSlice";

export function Menu() {
  const { menuItem } = useParams();

  const currentMenuItem = useSelector(selectCategoryByMenuItem(menuItem as MenuItem));
  const items = Object.values(currentMenuItem.products);

  if (!currentMenuItem) {
    return <Navigate to="../" replace />;
  }

  return (
    <MenuContainer>
      {items.map((item) => (
        <Link to={item.title} key={item.title}>
          <Card>
            <ImgDiv>
              <CardImage src={item.imgUrl} />
            </ImgDiv>
            <CardContent>
              <CardHeader>{item.title}</CardHeader>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardPrice>$ {item.price}</CardPrice>
            <Buy>Details</Buy>
          </Card>
        </Link>
      ))}
    </MenuContainer>
  );
}
