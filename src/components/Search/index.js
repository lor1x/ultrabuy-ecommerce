import React, { useState } from "react";
import Input from "../Inputs";
import SearchIcon from "../../images/svg/ic-actions-search.svg";
const Search = ({ className }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSearch = () => {
    console.log(value);
  };
  return (
    <div className={className}>
      <Input
        placeholder="Input value"
        // classLabel=""
        classInput="py-2 px-4"
        // error={false}
        // errorMessage="error message"
        icon={SearchIcon}
        iconPosition="right"
        //className=""
        // error={false}
        value={value}
        onChange={handleChange}
        onClickIcon={handleSearch}
        iconClass="cursor-pointer"
      />
    </div>
  );
};

export default Search;
