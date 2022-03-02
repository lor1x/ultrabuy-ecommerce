import React, { useState } from "react";
import { Categories, Brands, Ratings, Price } from "./components";
import Button from "../Button";
const Filter = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [price, setPrice] = useState({ min: 0, max: 0 });

  const handlePriceChange = (min, max) => {
    setPrice({ ...price, min: min, max: max });
  };
  return (
    <div className="flex-col flex w-full">
      <Categories />
      <Brands
        selectedBrands={selectedBrands}
        addbrand={(newBrand) => {
          if (!selectedBrands.includes(newBrand)) {
            setSelectedBrands((prevState) => [...prevState, newBrand]);
          } else {
            setSelectedBrands(selectedBrands.filter((el) => el !== newBrand));
          }
        }}
      />
      <Ratings
        selectedRatings={selectedRatings}
        addRating={(newRating) => {
          if (!selectedRatings.includes(newRating)) {
            setSelectedRatings((prevState) => [...prevState, newRating]);
          } else {
            setSelectedRatings(
              selectedRatings.filter((el) => el !== newRating)
            );
          }
        }}
      />
      <Price price={price} setPrice={handlePriceChange} />
      <div className="flex">
        <Button
          onClick={() => console.log(selectedBrands, selectedRatings, price)}
          content="Apply"
          className="mt-8 mr-4 bg-C2-default text-white text-sm font-bold py-3 px-4 border-2 border-C2-B  transition-all ease-linear duration-300 hover:text-black hover:bg-transparent hover:border-C1-C"
        />
        <Button
          content="Reset"
          className="mt-8 mr-4 text-C1-C text-sm font-bold py-3 px-4 border-2 border-transparent hover:border-C1-C  transition-all ease-linear duration-300 hover:text-black hover:bg-transparentborder-C1-C"
        />
      </div>
    </div>
  );
};

export default Filter;
