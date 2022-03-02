import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "..";
import EmptyStar from "../../images/svg/EmptyStar.svg";
import FilledStar from "../../images/svg/ic-actions-star.svg";

const CardSmall = ({
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
    <div className={"flex flex-col p-4 " + classNameCard}>
      <div className="w-full h-full relative">
        {!loading && (
          <div className="absolute top-3 left-3 rounded px-2 bg-C1-D text-C2-default text-xs font-semibold">
            {(((previousPrice - price) / previousPrice) * 100).toFixed(2) +
              " %"}
          </div>
        )}
        {loading ? (
          <div className="bg-C1-D w-full rounded-lg h-44 animate-pulse" />
        ) : (
          <img
            className="w-full h-44 rounded-lg bg-C1-D object-cover"
            src={imageUrl}
            alt=""
          />
        )}

        <div className="my-4">
          {!loading && (
            <>
              <h3 className="text-base font-medium mb-2">{title}</h3>
              <p className="text-xs text-C1-B mt-1">{description}</p>
            </>
          )}
          {loading && (
            <>
              <div className="bg-C1-D w-8/12 h-5 rounded-sm animate-pulse" />
              <p className="bg-C1-D w-5/12 h-3 rounded-sm animate-pulse mt-1" />
              <p className="bg-C1-D w-5/12 h-3 rounded-sm animate-pulse mt-1" />
            </>
          )}
        </div>
        <div className="flex">
          {Rating().map((vl, index) =>
            vl ? (
              <img key={index} src={FilledStar} alt="" />
            ) : (
              <img key={index} src={EmptyStar} alt="" />
            )
          )}
        </div>
        <div className="flex justify-between mt-4">
          <div>
            {!loading && (
              <>
                <h6 className="text-lg text-black font-semibold">
                  {price + " " + currency}
                </h6>
                <span className="text-C1-C text-xs line-through">
                  {previousPrice}
                </span>
              </>
            )}
            {loading && (
              <>
                <div className="bg-C1-D w-20 h-4 rounded-sm animate-pulse mt-2" />
                <div className="bg-C1-D w-16 h-2 rounded-sm animate-pulse mt-2" />
              </>
            )}
          </div>
          {!loading && (
            <Link to={redirectUrl} className="mt-auto">
              <Button
                className="text-white text-sm border border-C2-B bg-C2-default rounded px-4 py-2
             hover:bg-white hover:text-C2-default transition duration-300 ease-linear hover:shadow"
                content="Buy now"
                disabled={false}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
