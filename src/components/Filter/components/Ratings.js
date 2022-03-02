import React from "react";
import { CheckBox, Rating } from "../../../components";

const Ratings = ({ addRating }) => {
  return (
    <div className="w-full mb-4">
      <h4 className="font-semibold text-lg mb-4">Rating</h4>
      <div className="flex">
        <CheckBox
          activate={(name) => addRating(name)}
          className="my-1"
          name="5"
        />
        <Rating rating={5} className="flex" />
      </div>
      <div className="flex">
        <CheckBox
          className="my-1"
          name="4"
          activate={(name) => addRating(name)}
        />
        <Rating rating={4} className="flex" />
      </div>
      <div className="flex">
        <CheckBox
          className="my-1"
          name="3"
          activate={(name) => addRating(name)}
        />
        <Rating rating={3} className="flex" />
      </div>
      <div className="flex">
        <CheckBox
          className="my-1"
          name="2"
          activate={(name) => addRating(name)}
        />
        <Rating rating={2} className="flex" />
      </div>
      <div className="flex">
        <CheckBox
          className="my-1"
          name="1"
          activate={(name) => addRating(name)}
        />
        <Rating rating={1} className="flex" />
      </div>
    </div>
  );
};

export default Ratings;
