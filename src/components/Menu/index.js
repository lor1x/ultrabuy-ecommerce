import React from "react";
import DropDown from "./Dropdown";
const MainMenu = ({ items }) => {
  return (
    <div className="hidden w-full bg-C1-E py-4 px-6 md:flex rounded-md">
      {items.map((item, index) => (
        <div className="mr-10" key={index}>
          <DropDown
            category={item.category}
            labels={item.subcategories}
            url={item.url}
          />
        </div>
      ))}
    </div>
  );
};

export default MainMenu;
