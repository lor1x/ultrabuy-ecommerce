import React from "react";
import FilledStar from "../../images/svg/start-filled.svg";
import EmptyStar from "../../images/svg/EmptyStar.svg";

const RatingComponent = ({ rating, className }) => {
  const Rating = () => {
    let array = [];
    if (rating > 4.5)
      for (let index = 0; index < 5; index++) {
        array.push(true);
      }
    else if (rating > 3.5) {
      for (let index = 0; index < 4; index++) {
        array.push(true);
      }
    } else if (rating > 2.5) {
      for (let index = 0; index < 3; index++) {
        array.push(true);
      }
    } else if (rating > 1.5) {
      for (let index = 0; index < 2; index++) {
        array.push(true);
      }
    } else if (rating > 0.5) {
      array.push(true);
    } else {
    }
    for (let index = array.length; index < 5; index++) {
      array.push(false);
    }
    return array;
  };
  return (
    <div className={className}>
      {Rating().map((vl, index) =>
        vl ? (
          <img key={index} src={FilledStar} alt="" />
        ) : (
          <img key={index} src={EmptyStar} alt="" />
        )
      )}
    </div>
  );
};

export default RatingComponent;
