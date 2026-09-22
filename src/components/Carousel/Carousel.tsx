import React, { MouseEvent, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

export type Review = { text: string; author: string };

export interface CarouselProps {
  reviews?: Review[];
}

const dummyData = [
  { text: "The world needs to see this. Please share this video.", author: "Frank Castro" },
  { text: "Great documtery glad to know the truth and shoutout to the pastors that made this video", author: "Peter Fuentes" },
  { text: "Great video loved it... 'Now theres someone who's finally saying it like it is'", author: "Georgie 1611" },
  { text: "By far the best description of the sodomites and thanks for not showing the disgusting weird alphabet letters!", author: "ews-63337" },
  { text: "I am very grateful for this documentary!!!", author: "mommadriver" },
  { text: "One of the best New IFB Documentaries out there.", author: "andrewloza" },
  { text: "Our society has become deceived and this documentary clearly preaches the truth.", author: "aharms-38421" },
  { text: "Awesome documentary, truth throughout.", author: "youtube" },
  { text: "Fun fact. I asked Pastor Anderson how to say “don’t look back” in Hebrew for the beginning on this video.", author: "Pastor Mejia" },
];

const Carousel: React.FC<CarouselProps> = ({
  reviews = dummyData,
}): JSX.Element => {
  const [counter, setCounter] = React.useState<number>(0);
  enum ArrowEnum {
    LEFT = -1,
    RIGHT = 1,
  }

  const handleIconClick = (e: MouseEvent<SVGSVGElement>, arrow: ArrowEnum) => {
    e.preventDefault();
    let next = (counter + arrow) % reviews.length;
    setCounter(next >= 0 ? next : next + reviews.length);
  };

  const circles = useMemo(
    () =>
      reviews?.map((review, index) => {
        const active = index === counter;
        return (
          <FontAwesomeIcon
            key={reviews.indexOf(review)}
            icon={faCircle}
            style={{
              margin: "0 0.25em",
              color: active ? "white" : "#9a9a9a",
            }}
          />
        );
      }),
    [reviews, counter]
  );

  return (
    <div className="carousel-container">
      <FontAwesomeIcon
        className="arrow-icon"
        icon={faAngleLeft}
        onClick={(e) => handleIconClick(e, ArrowEnum.LEFT)}
      />
      <div className="review-container">
        <div className="review-text">{reviews[counter].text}</div>
        <div className="review-author">{reviews[counter].author}</div>
        <div className="circle-icons-container">{circles}</div>
      </div>
      <FontAwesomeIcon
        className="arrow-icon"
        icon={faAngleRight}
        onClick={(e) => handleIconClick(e, ArrowEnum.RIGHT)}
      />
    </div>
  );
};

export default Carousel;
