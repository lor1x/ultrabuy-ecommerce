import React from "react";

const GridIcon = ({ active, className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.333 1.33324H2.66634C1.92996 1.33324 1.33301 1.93019 1.33301 2.66657V13.3332C1.33301 14.0696 1.92996 14.6666 2.66634 14.6666H13.333C14.0694 14.6666 14.6663 14.0696 14.6663 13.3332V2.66657C14.6663 1.93019 14.0694 1.33324 13.333 1.33324Z"
        stroke={active ? "#6A983C" : "#A9A9A9"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33301 8H14.6663"
        stroke={active ? "#6A983C" : "#A9A9A9"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1.33324V14.6666"
        stroke={active ? "#6A983C" : "#A9A9A9"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ListIcon = ({ active, className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.333 1.33324H2.66634C1.92996 1.33324 1.33301 1.93019 1.33301 2.66657V13.3332C1.33301 14.0696 1.92996 14.6666 2.66634 14.6666H13.333C14.0694 14.6666 14.6663 14.0696 14.6663 13.3332V2.66657C14.6663 1.93019 14.0694 1.33324 13.333 1.33324Z"
        stroke={active ? "#6A983C" : "#A9A9A9"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33301 4.66647H14.6663"
        stroke={active ? "#6A983C" : "#A9A9A9"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33301 8H14.6663"
        stroke={active ? "#6A983C" : "#A9A9A9"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33301 11.3332H14.6663"
        stroke={active ? "#6A983C" : "#A9A9A9"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const PageTitle = ({ title, type, setType, tittleClassname }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className={"font-semibold " + tittleClassname}>{title}</h1>
      <div className="hidden sm:flex">
        <div className="flex mr-6 select-none" onClick={() => setType("grid")}>
          <GridIcon className="mr-1" active={type === "grid"} />
          <p
            className={`font-normal text-xs transition-all ease-in-out duration-200 cursor-pointer ${
              type === "grid" ? "text-c1-default" : "text-C1-C"
            }`}
          >
            Grid view
          </p>
        </div>
        <div className="flex mr-6 select-none" onClick={() => setType("list")}>
          <ListIcon className="mr-1" active={type === "list"} />
          <p
            className={`font-normal text-xs transition-all ease-in-out duration-200 cursor-pointer ${
              type === "list" ? "text-c1-default" : "text-C1-C"
            }`}
          >
            List view
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
