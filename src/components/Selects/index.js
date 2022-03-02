import React, { useState } from "react";
import image from "../../images/svg/ic-chevron-top-bottom.svg";
const Select = ({
  label,
  onChange,
  checkedValue,
  placeholder,
  className,
  error,
  errorMessage,
  classLabel,
  classSelect,
  classInput,
  values,
}) => {
  const [selectedValue, setSelectedValue] = useState(
    checkedValue ? checkedValue : ""
  );
  const [dropdown, setDropdown] = useState(false);

  const handleChange = (value) => {
    setSelectedValue(value);
    if (onChange) onChange(value);
    showDropDown();
  };
  const showDropDown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className={"flex flex-col cursor-pointer " + className}>
      <label
        className={
          "font-bold text-xs transition-colors duration-100 leading-normal mb-1 " +
          classLabel
        }
      >
        {error ? errorMessage : label}
      </label>
      <div className={"relative " + (dropdown ? " z-30 " : " overflow-hidden")}>
        <div
          onClick={showDropDown}
          className={`flex px-4 py-2 bg-c1-F text-sm transition-all z-10 duration-200 border rounded-lg items-center justify-between ${
            (error ? " border-red-500 " : " border-C1-D ") +
            (dropdown ? " border-C2-default " : " border-C1-D ") +
            classSelect
          }`}
        >
          <input
            className={`flex bg-C1-F cursor-pointer focus:outline-none placeholder-C1-B w-full ${classInput}`}
            value={selectedValue}
            placeholder={placeholder}
            disabled={true}
          />
          <img className="ml-3  w-4 h-4" src={image} alt="" />
        </div>
        {/* dropdown */}
        <ul
          style={{ zIndex: "-1" }}
          className={`absolute left-0 top-full w-full px-2 py-2 bg-gray-200 transition-all ease-in-out duration-350 rounded-lg mt-1 ${
            dropdown ? "show__dropdown" : "hide__dropdown"
          }  `}
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

export default Select;
