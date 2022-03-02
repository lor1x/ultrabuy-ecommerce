import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { text: "Category name", link: "/", number: "320" },
  { text: "Category name", link: "/", number: "320" },
  { text: "Category name", link: "/", number: "32" },
  { text: "Category name", link: "/", number: "3" },
];

const Categories = () => {
  return (
    <div className="w-full mb-4">
      <h4 className="font-semibold text-lg mb-4">Categories</h4>
      <div className="-mb-3">
        {categories.map((el, index) => (
          <Link key={index} to={el.link}>
            <div className="flex justify-between my-3 hover:underline hover:text-C2-default transition-all ease-linear duration-300">
              <div className="font-normal text-sm">{el.text}</div>
              <div className="text-xs text-C2-default px-2 rounded bg-C1-E flex items-center justify-center">
                {el.number}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
