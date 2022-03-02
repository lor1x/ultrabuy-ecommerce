import * as React from "react";
import { useHistory } from "react-router";
import { Button } from "../../../components";

import Hooman from "../../../images/svg/undraw_successful_purchase_uyin 2.svg";

function Section1() {
  const history = useHistory();

  return (
    <div className="flex bg-white">
      <div
        className="flex flex-col md:flex-row w-full"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/Rectangle90.png"
          })`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center w-full md:w-1/2 py-5">
          <div className="flex flex-col md:w-3/4 lg:ml-40 px-4 sm:px-2 md:px-0">
            <span className="flex pb-3 text-2xl sm:text-3xl lg:text-5xl leading-relaxed mt-14 md:mt-7 lg:mt-0 font-semibold text-white">
              BUY ANYTHING WITH ULTRABUY
            </span>
            <p className="flex md:w-4/6 text-sm sm:text-base lg:text-lg font-light pt-5 pb-10 text-white">
              Or kind rest bred with am shed then. In raptures building an
              bringing be. Elderly is detract tedious assured private so to
              visited.
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
        <div className="flex w-full md:w-1/2 md:pr-8 lg:pr-16 mt-5 bg-white md:bg-opacity-0 md:my-24 lg:my-32">
          <div className="flex h-full py-10 md:py-3 lg:py-0">
            <img src={Hooman} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
