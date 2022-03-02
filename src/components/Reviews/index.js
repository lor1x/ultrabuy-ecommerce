import React from "react";
import Avatar from "../../images/png/avatar(1).png";
const reviews = [
  {
    text: "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here",
    author: "Name and Surname",
    pic: Avatar,
  },
  {
    text: "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here",
    author: "Name and Surname",
    pic: Avatar,
  },
  {
    text: "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here",
    author: "Name and Surname",
    pic: Avatar,
  },
];
const Reviews = ({
  wrapperClassname,
  contentClassname,
  reviewCardClassname,
}) => {
  return (
    <div className={wrapperClassname}>
      <h4 className="text-lg font-semibold">Our customers says</h4>
      <div
        className={
          "flex flex-wrap md:flex-nowrap gap-4 text-center " + contentClassname
        }
      >
        {reviews.map((el, index) => (
          <div
            key={index}
            className={
              "border flex-col flex border-C1-E rounded-md px-8 pt-6 mt-5 " +
              reviewCardClassname
            }
          >
            <blockquote className="bold mb-6 text-sm">“ {el.text} “</blockquote>
            <p className="text-C1-D text-xs mb-1">{el.author}</p>
            <img
              className="w-12 h-12 rounded-full transform translate-y-1/2 mx-auto"
              src={el.pic}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
