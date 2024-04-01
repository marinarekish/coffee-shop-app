import { useState } from "react";
import { Slides } from "../../../../types";
import { BannerText, Card, Dots, Dot, DotSelected, ImageSlider, MainText, Paragraph } from "./styledSlider";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Button } from "../../../../components/button/Button";

type SliderCardProps = {
  choices: Slides;
};

export function SliderCard({ choices }: SliderCardProps) {
  const [choiceIndex, setChoiceIndex] = useState(0);

  function showNext() {
    setChoiceIndex((index) => {
      if (index === choices.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrev() {
    setChoiceIndex((index) => {
      if (index === 0) return choices.length - 1;

      return index - 1;
    });
  }

  return (
    <>
      <Card>
        <Button variant="ghost" onClick={showPrev}>
          <FiArrowLeft />
        </Button>
        <BannerText>
          <ImageSlider src={choices[choiceIndex].imgUrl} />
          <Dots>
            {choices.map((_, index) => (
              <button key={index} onClick={() => setChoiceIndex(index)}>
                {index === choiceIndex ? <DotSelected /> : <Dot />}
              </button>
            ))}
          </Dots>
          <MainText>{choices[choiceIndex].title}</MainText>
          <Paragraph>{choices[choiceIndex].description}</Paragraph>
          <MainText>${choices[choiceIndex].price}</MainText>
        </BannerText>
        <Button variant="ghost" onClick={showNext}>
          <FiArrowRight />
        </Button>
      </Card>
    </>
  );
}
