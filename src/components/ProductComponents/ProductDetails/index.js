import React, { useState, useRef } from "react";
import { Button, SelectNumber } from "../../";
import Tabs from "./DetailsTabs";

import EmptyStar from "../../../images/svg/EmptyStar.svg";
import FilledStar from "../../../images/svg/ic-actions-star.svg";
import Compare from "../../../images/svg/ic-layout-picture-right.svg";
import Favourite from "../../../images/svg/ic-actions-heart.svg";
import FavouriteFilled from "../../../images/svg/ic-actions-heart-filled.svg";

const ProductDetails = ({
  title,
  description,
  rating,
  reviewNr,
  currency,
  price,
  previousPrice,
}) => {
  const [fave, setFave] = useState(false);

  const tabRef = useRef(null);

  const handleClick = () => {
    window.scrollTo({ behavior: "smooth", top: tabRef.current.offsetTop });
    tabRef.current.showReviews();
  };

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
    <div className="flex flex-col w-full md:w-1/2 px-2">
      <div className="flex flex-col w-full py-1">
        <h2 className="flex text-3xl font-bold">{title}</h2>
        <div className="flex flex-row gap-x-3 py-2">
          <div className="flex">
            {Rating().map((val, index) =>
              val ? (
                <img key={index} src={FilledStar} alt="" title={rating} />
              ) : (
                <img key={index} src={EmptyStar} alt="" />
              )
            )}
          </div>
          <div className="flex text-C1-C text-xs font-light">
            <span
              className="flex underline cursor-pointer"
              onClick={() => handleClick()}
            >
              {reviewNr} customer reviews
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 py-2 w-full font-normal">
        <p>{description}</p>
        <div className="flex w-full border border-C2-default rounded-md h-36">
          Small product details
        </div>
        <div className="flex flex-row w-full md:w-5/6 px-1 md:px-3 py-4 items-center justify-between md:border md:border-gray-200 md:rounded-lg">
          <div className="flex flex-col font-semibold">
            <h6 className="text-2xl text-C2-default">
              {price + " " + currency}
            </h6>
            <span className="text-C1-C text-xs line-through">
              {previousPrice}
            </span>
          </div>
          <div className="flex flex-row items-center justify-around px-px md:px-2 gap-x-3">
            <SelectNumber
              placeholder="1"
              error={true}
              checkedValue="Pcs"
              values={["Pcs", "Kg", "Nmb"]}
              onChange={(value) => console.log(value)}
              classSelect="py-3 rounded-xl"
            />
            <Button
              className="rounded-xl px-2 md:px-4 py-1.5 md:py-2.5 border-2 border-C2-B hover:shadow-md bg-C2-default hover:bg-white text-white hover:text-C2-default transition duration-500 ease-in-out"
              content="+ Add to cart"
            />
          </div>
        </div>
        <div className="flex flex-row gap-x-4 w-full items-center justify-start">
          <Button
            className="rounded-xl px-4 py-2.5 hover:shadow-lg hover:bg-white text-black hover:text-C4-default transition duration-500 ease-in-out"
            content="Add to my wishlist"
            icon={fave ? FavouriteFilled : Favourite}
            iconPosition="left"
            IconClassName="pr-1"
            onClick={() => setFave(!fave)}
          />
          <Button
            className="rounded-xl px-4 py-2.5 hover:shadow-lg hover:bg-white text-black hover:text-C4-default transition duration-500 ease-in-out"
            content="Compare"
            icon={Compare}
            iconPosition="left"
            IconClassName="pr-1"
          />
        </div>
      </div>
      <Tabs ref={tabRef} reviewsNr={reviewNr} questionsNr={4} />
    </div>
  );
};

export default ProductDetails;
