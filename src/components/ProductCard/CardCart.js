import React, { useState } from "react";
import { Button, SelectNumber } from "../";

import CardimageProduct from "../../images/png/product_image_test.jpg";
import CloseIcon from "../../images/svg/ic-actions-close.svg";
import Favourite from "../../images/svg/ic-actions-heart.svg";
import FavouriteFilled from "../../images/svg/ic-actions-heart-filled.svg";
import EmptyStar from "../../images/svg/EmptyStar.svg";
import FilledStar from "../../images/svg/ic-actions-star.svg";

const CardCart = ({ rating }) => {
  const [fave, setFave] = useState(false);

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
    <div className="flex gap-4">
      <div className="flex flex-col" style={{ width: "30%" }}>
        <img src={CardimageProduct} alt="" className="rounded-xl" />
        <div className="mt-3 flex flex-col gap-2">
          <div className="flex gap-1 items-center">
            <Button
              className="rounded-xl px-2 py-2.5 hover:shadow-md hover:bg-white text-black hover:text-C4-default transition duration-500 ease-in-out"
              content="Wishlist"
              icon={fave ? FavouriteFilled : Favourite}
              iconPosition="left"
              IconClassName="-ml-0.5 md:ml-0 md:pr-1"
              onClick={() => setFave(!fave)}
            />
          </div>
          <div className="flex gap-1 items-center ">
            <Button
              className="rounded-xl px-2 py-2.5 hover:shadow-md hover:bg-white text-black hover:text-red-500 transition duration-500 ease-in-out"
              content="Remove"
              icon={CloseIcon}
              iconPosition="left"
              IconClassName="-ml-0.5 md:ml-0 md:pr-1 w-5 h-5"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col" style={{ width: "70%" }}>
        <h5>Product title</h5>
        <div>
          <span>Store:</span>
          <p>Tharamis Farm</p>
          <div className="flex mt-2 mb-4">
            {Rating().map((vl, index) =>
              vl ? (
                <img key={index} src={FilledStar} alt="" />
              ) : (
                <img key={index} src={EmptyStar} alt="" />
              )
            )}
          </div>
          <div className="flex justify-between font-semibold">
            <div>
              <p className="text-C2-default text-lg ">36.99 USD</p>
              <p className="line-through text-C1-C text-xs">56.99 USD</p>
            </div>
            <SelectNumber
              placeholder="Input value"
              error={true}
              checkedValue="Nmb"
              values={["Pcs", "Kg", "Nmb"]}
              onChange={(value) => console.log(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
