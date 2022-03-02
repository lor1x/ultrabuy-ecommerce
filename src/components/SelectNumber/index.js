import React, { useState } from "react";
import Image from "../../images/svg/ic-chevron-down.svg";

const SelectNumber = ({
  onChange,
  checkedValue,
  placeholder,
  className,
  defaultNumber,
  classSelect,
  values,
}) => {
  const [selectedValue, setSelectedValue] = useState(
    checkedValue ? checkedValue : ""
  );
  const [selectedNmb, setSelectedNmb] = useState(
    defaultNumber ? defaultNumber : ""
  );
  const [error, seterror] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleChange = (value) => {
    setSelectedValue(value);
    showDropDown();
    if (onChange) onChange(value);
  };
  const showDropDown = () => {
    setDropdown(!dropdown);
  };

  const changeSelectedNumber = (e) => {
    let value = e.target.value;
    seterror(true);
    if (!isNaN(value)) {
      seterror(false);
      setSelectedNmb(value);
    }
  };
  return (
    <div className={"flex flex-col cursor-pointer " + className}>
      <div className={"relative " + (dropdown ? " z-30 " : " overflow-hidden")}>
        <div
          className={`flex px-4 py-2 text-sm transition-all bg-c1-F duration-200 border rounded-lg items-center justify-between ${
            (error ? " border-red-500 " : " border-C1-D ") + classSelect
          }`}
        >
          <input
            type="text"
            className="w-7 outline-none border-r mr-2 bg-c1-F border-gray-500"
            value={selectedNmb}
            onChange={changeSelectedNumber}
          />

          <div className="flex items-center" onClick={showDropDown}>
            <input
              className={`placeholder-C1-D focus:outline-none w-9 cursor-pointer font-bold bg-transparent`}
              value={selectedValue}
              placeholder={placeholder}
              disabled={true}
            />
            <img className="ml-2 w-4 h-4" src={Image} alt="" />
          </div>
        </div>
        {/* dropdown */}
        <ul
          className={`absolute left-0 top-full w-full px-2 py-2 bg-gray-200 transition-all ease-in-out duration-150 rounded-md ${
            dropdown ? "show__dropdown" : "hide__dropdown"
          }`}
        >
          {values.map((value, index) => (
            <li
              key={index}
              className="py-1 px-2 rounded-sm text-sm hover:bg-white transition-all ease-linear duration-100"
              onClick={() => handleChange(value)}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectNumber;
