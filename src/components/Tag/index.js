import React from "react";
const SvgIcon = ({ color }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.17995 9.18007L2.81995 2.82007"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M9.17995 2.82007L2.81995 9.18007"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
const Tag = ({
  value,
  color,
  wrapperClassName,
  textClassName,
  onClick,
  displayIcon,
}) => {
  return (
    <div
      className={`flex items-center ` + wrapperClassName}
      onClick={() => onClick()}
    >
      <div className={`text-xs ` + textClassName}>{value}</div>
      {displayIcon ? <SvgIcon color={color} /> : null}
    </div>
  );
};

export default Tag;
