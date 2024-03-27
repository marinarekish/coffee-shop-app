import { Slides } from "./types";
import coffeeSlider1 from "/img/coffeeSlider1.png";
import coffeeSlider2 from "/img/coffeeSlider2.png";
import coffeeSlider3 from "/img/coffeeSlider3.png";

export const SLIDES: Slides = [
  {
    title: `S’mores Frappuccino`,
    imgUrl: coffeeSlider1,
    description:
      "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
    price: "5.50",
  },
  {
    title: "Caramel Macchiato",
    imgUrl: coffeeSlider2,
    description:
      "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
    price: "5.00",
  },
  {
    title: "Ice coffee",
    imgUrl: coffeeSlider3,
    description:
      "A popular summer drink that tones and invigorates during the heat. Prepared from classic coffee, milk and ice.",
    price: "4.50",
  },
];
