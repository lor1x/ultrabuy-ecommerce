import React, { useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

import EmptyStar from "../../images/svg/EmptyStar.svg";
import FilledStar from "../../images/svg/ic-actions-star.svg";
import IconRight from "../../images/svg/ic-chevron-right.svg";
import FavouriteIcon from "../../images/svg/ic-actions-heart.svg";
import FavouriteFilled from "../../images/svg/ic-actions-heart-filled.svg";

const CardBig = ({
  title,
  description,
  rating,
  price,
  previousPrice,
  redirectUrl,
  loading,
  currency,
  classNameCard,
  imageUrl,
}) => {
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
    <div
      className={
        "max-w-5xl w-full flex border flex-col lg:flex-row border-C1-C rounded-xl " +
        classNameCard
      }
    >
      <div className="lg:w-2/6 w-full">
        {loading ? (
          <div className="bg-C1-D w-full h-48 lg:h-full rounded-xl animate-pulse" />
        ) : (
          <img
            className="w-full h-full rounded-xl bg-C1-D object-cover"
            src={imageUrl}
            alt=""
          />
        )}
      </div>
      <div className="lg:p-8 p-3 flex flex-col lg:flex-row flex-1">
        <div className="lg:w-7/12 w-full">
          {!loading && (
            <>
              <h4 className="font-semibold text-lg">Product title</h4>
              <p className="text-xs text-C1-B mt-1 mb-2">
                Space for a small product description
              </p>
            </>
          )}
          {loading && (
            <>
              <p className="bg-C1-D w-8/12 h-5 rounded-sm animate-pulse" />
              <p className="bg-C1-D w-5/12 h-3 mb-1 rounded-sm animate-pulse mt-1" />
            </>
          )}

          <div className="flex">
            {Rating().map((vl, index) =>
              vl ? (
                <img key={index} src={FilledStar} alt="" />
              ) : (
                <img key={index} src={EmptyStar} alt="" />
              )
            )}
          </div>
          <div className="flex flex-col mt-3 lg:mt-6 text-sm text-C1-C font-normal">
            <div className="flex">
              {!loading && (
                <>
                  <div className="flex flex-col mr-8 lg:-my-1">
                    <p className="lg:my-1 my-0.5">Fresheness</p>
                    <p className="lg:my-1 my-0.5">Farm</p>
                    <p className="lg:my-1 my-0.5">Delivery</p>
                    <p className="lg:my-1 my-0.5">Stock</p>
                  </div>
                  <div className="flex flex-col lg:-my-1">
                    <p className="lg:my-1 my-0.5">
                      <span className="text-C2-default">New</span> (Extra fresh)
                    </p>
                    <p className="lg:my-1 my-0.5">
                      <span>Europe</span>
                    </p>
                    <p className="lg:my-1 my-0.5">
                      <span>Grocery Tarm Fields</span>
                    </p>
                    <p className="lg:my-1 my-0.5">
                      <span className="text-C2-default">320 pcs</span>
                    </p>
                  </div>
                </>
              )}
              {loading && (
                <>
                  <div className="flex flex-col mr-8 lg:my-1">
                    <p className="my-0.5 bg-C1-D w-20 h-3 rounded-sm animate-pulse lg:my-1" />
                    <p className="my-0.5 bg-C1-D w-20 h-3 rounded-sm animate-pulse lg:my-1" />
                    <p className="my-0.5 bg-C1-D w-20 h-3 rounded-sm animate-pulse lg:my-1" />
                    <p className="my-0.5 bg-C1-D w-20 h-3 rounded-sm animate-pulse lg:my-1" />
                  </div>
                  <div className="flex flex-col w-1/2 lg:my-1">
                    <p className="my-0.5 bg-C1-D w-20 h-3 rounded-sm animate-pulse lg:my-1" />
                    <p className="my-0.5 bg-C1-D w-20 h-3 rounded-sm animate-pulse lg:my-1" />
                    <p className="my-0.5 bg-C1-D w-20 h-3 rounded-sm animate-pulse lg:my-1" />
                    <p className="my-0.5 bg-C1-D w-20 h-3 rounded-sm animate-pulse lg:my-1" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div
          className={`flex flex-row lg:flex-col justify-between flex-wrap sm:flex-nowrap mt-3 ${
            loading ? "items-start" : "lg:justify-end"
          }`}
        >
          <div className="flex md:block w-full justify-between md:w-auto mb-4 md:mb-auto">
            {loading && (
              <div className=" w-full">
                <p className="bg-C1-D w-8/12 h-5 rounded-sm animate-pulse" />
                <p className="bg-C1-D w-5/12 h-3 rounded-sm animate-pulse mt-2" />
              </div>
            )}
            {!loading && (
              <div>
                <h4 className="font-semibold text-lg">36.99 USD</h4>
                <p className="text-C1-C text-xs line-through">48.56</p>
              </div>
            )}
            {!loading && (
              <div className="mt-4">
                <p className="text-C1-C font-semibold text-xs">Free Shipping</p>
                <p className="text-xs text-C1-C">Delivery in 1 day</p>
              </div>
            )}
            {loading && (
              <div className="mt-4">
                <p className="bg-C1-D w-20 h-3 rounded-sm animate-pulse mt-1" />
                <p className="bg-C1-D w-20 h-3 rounded-sm animate-pulse mt-1" />
              </div>
            )}
          </div>
          {!loading && (
            <div className="w-full sm:w-auto">
              <Link to={redirectUrl} className="mt-auto">
                <Button
                  className="text-white w-full border hover:border-C2-default bg-C2-default rounded px-4 py-3 hover:shadow-none transition duration-200 hover:bg-white hover:text-C2-default ease-linear"
                  content="Disabled button"
                  onClick={() => console.log(1)}
                  icon={IconRight}
                  iconPosition="right"
                />
              </Link>
              <Button
                className="w-full rounded border mt-1 bg-c1-F px-4 py-2 hover:shadow-none text-black hover:border-C4-default hover:bg-white hover:text-C4-default transition duration-300 ease-in-out"
                content="Add to wish list"
                icon={fave ? FavouriteFilled : FavouriteIcon}
                iconPosition="left"
                IconClassName="-ml-0.5 md:ml-0 md:pr-1"
                onClick={() => setFave(!fave)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardBig;
