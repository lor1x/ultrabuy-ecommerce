import React from "react";

const Link = ({ id, content, className }) => {
  return (
    <a
      href={id}
      className={
        "border bg-white text-black px-3 py-1 rounded mx-2 my-1 inline-block " +
        className
      }
    >
      {content}
    </a>
  );
};

export default Link;
