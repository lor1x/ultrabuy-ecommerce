import React from "react";
import Button from "../Button";
import RightIcon from "../../images/svg/ic-chevron-right.svg";

const Pagination = () => {
  const nrStyle =
    "px-2 hover:text-C2-default transition-all ease-linear duration-300 outline-none border-none focus:outline-none";

  return (
    <div className="flex justify-between items-center w-full lg:py-4 md:py-0 lg:px-11 md:px-6 sm:px-3 ">
      <div className="flex -mx-1 items-center">
        <span className=" font-normal text-C1-C px-1">Page:</span>
        <button className={nrStyle}>1</button>
        <button className={nrStyle}>2</button>
        <button className={nrStyle}>3</button>
        <button className={nrStyle}>4</button>
      </div>

      <Button
        content="NextPage"
        icon={RightIcon}
        className="bg-C2-default text-white text-sm font-bold py-3 px-4 border-2 border-C2-B  transition-all ease-linear duration-300 hover:text-black hover:bg-transparent hover:border-C1-C"
      />

      <div className="hidden sm:block">
        <span className=" bg-C2-E text-C2-default font-semibold px-2 mr-1 rounded-md">
          198
        </span>
        <span className="text-C1-C font-normal">items</span>
      </div>
    </div>
  );
};

export default Pagination;
