import React, { useState } from "react";
import Search from "./Search";
import DropDown from "./DropDown";

const DropDownValues = ["value1", "value2", "value3"];

const SearchWithDropdown = ({ classContainer, classDropdown, classSearch }) => {
  const [SearchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = () => {
    console.log(SearchValue);
  };

  return (
    <div
      className={`border bg-c1-F border-c1-D flex px-4 py-2.5 relative rounded h-10 ${classContainer}`}
    >
      <DropDown className={classDropdown} values={DropDownValues} />
      <Search
        onChange={handleChange}
        onSearch={handleSearch}
        value={SearchValue}
        className={classSearch}
      />
    </div>
  );
};

export default SearchWithDropdown;
