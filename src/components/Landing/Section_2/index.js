import * as React from "react";
import { useHistory } from "react-router";
import { Button } from "../../../components";

import Image1 from "../../../images/png/pexels-ray-piedra-1478442 1.png";

function Section2() {
  const history = useHistory();

  return (
    <div className="flex bg-white">
      <div className="flex w-full bg-C2-default flex-col md:flex-row">
        <div className="flex w-full md:w-1/2">
          <div className="flex h-full">
            <img src={Image1} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 py-5">
          <div className="flex flex-col md:w-3/4 px-4 sm:px-2 md:px-0">
            <span className="flex pb-3 text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-white">
              Some title here
            </span>
            <p className="flex text-sm sm:text-base font-light pt-5 pb-10 text-white">
              Or kind rest bred with am shed then. In raptures building an
              bringing be. Elderly is detract tedious assured private so to
              visited. . Or kind rest bred with am shed then. In raptures
              building an bringing be. Elderly is detract tedious assured
              private so to visited. Or kind rest bred with am shed then. In
              raptures building an bringing be. Elderly is detract tedious
              assured private so to visited.
            </p>
            <Button
              className="rounded-lg w-max px-4 md:px-9 py-2 md:py-3 hover:shadow-lg border-2 border-gray-200 bg-transparent hover:bg-white text-white hover:text-C2-default transition duration-200 ease-linear"
              content="Start Shopping"
              onClick={() => {
                history.push("/");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
