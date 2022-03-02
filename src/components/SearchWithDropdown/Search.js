import React from "react";
import Input from "../Inputs";
import SearchIcon from "../../images/svg/ic-actions-search.svg";
const Search = ({ className, onChange, onSearch, value }) => {
  return (
    <div className={className}>
      <Input
        placeholder="Search products, categories ..."
        // classLabel=""
        classInput="border-none px-1 w-full bg-white"
        classInputInside="w-full bg-white"
        className="w-full bg-white"
        // error={false}
        // errorMessage="error message"
        icon={SearchIcon}
        iconPosition="right"
        //className=""
        // error={false}
        value={value}
        onChange={onChange}
        onClickIcon={onSearch}
        iconClass="cursor-pointer bg-white"
      />
    </div>
  );
};

export default Search;
