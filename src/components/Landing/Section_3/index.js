import * as React from "react";
import { useHistory } from "react-router";
import { Button } from "../../../components";

import Image2 from "../../../images/svg/undraw_add_to_cart_vkjp 1.svg";

const reasons = [
  {
    title: "Reason 1",
    reason:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Reason 1",
    reason:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Reason 1",
    reason:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function Section3() {
  const history = useHistory();

  return (
    <div className="flex flex-col bg-white py-4">
      <div className="flex w-full justify-center items-center">
        <p className="text-black font-semibold text-4xl py-3">WHY US?</p>
      </div>

      <div className="flex w-full items-center flex-col lg:flex-row">
        <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-center w-full lg:w-1/3 py-5">
          {reasons.map((el, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-4 md:px-7 lg:px-14 py-3"
            >
              <h2 className="flex flex-wrap text-3xl text-C2-default pb-2">
                {el.title}
              </h2>
              <p className="flex flex-wrap text-sm text-black">{el.reason}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/3">
          <div>
            <img src={Image2} alt="" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-center w-full lg:w-1/3 py-5">
          {reasons.map((el, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-4 md:px-7 lg:px-14 py-3"
            >
              <h2 className="flex flex-wrap text-3xl text-C2-default pb-2">
                {el.title}
              </h2>
              <p className="flex flex-wrap text-sm text-black">{el.reason}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center items-center py-4">
        <Button
          className="rounded-lg w-max px-4 md:px-9 py-2.5 hover:shadow-lg border-2 border-C2-B bg-C2-default hover:bg-transparent text-white hover:text-black transition duration-300 ease-linear"
          content="TOP SELLING PRODUCTS"
          onClick={() => {
            history.push("/");
          }}
        />
      </div>
    </div>
  );
}

export default Section3;
