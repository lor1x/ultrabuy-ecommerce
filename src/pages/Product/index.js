import React from "react";
import {
  Button,
  Menu,
  ProductDetails,
  ProductImages,
  CardSmall,
} from "../../components";

import Img from "../../images/png/product_image_test.jpg";
import Right from "../../images/svg/ic-chevron-right.svg";
import Pat1 from "../../images/svg/Thur.svg";
import Pat2 from "../../images/svg/Waimakariri.svg";

const MenuItems = [
  {
    category: "Bakery",
    subcategories: ["value1", "value2", "value3"],
    url: "/category/1",
  },
  {
    category: "Fruit and vegetables",
    subcategories: ["value1", "value2", "value3"],
    url: "/category/1",
  },
  {
    category: "Meat and fish",
    subcategories: ["value1", "value2", "value3"],
    url: "/category/1",
  },
  {
    category: "Drinks",
    subcategories: ["value1", "value2", "value3"],
    url: "/category/1",
  },
];

const ProdCards = {
  title: "Product Name",
  description: "Space for a small product description",
  rating: "3.4",
  price: "36.99",
  currency: "All",
  previousPrice: "40.99",
  loading: false,
  redirectUrl: "/",
  imageUrl: Img,
};

const imageUrls = [
  {
    imgUR: Pat1,
    alt: " ",
  },
  {
    imgUR: Pat2,
    alt: " ",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col">
      <div className="hidden md:flex w-full pb-14 px-10 items-center justify-center ">
        <Menu items={MenuItems} />
      </div>
      <div className="flex flex-col md:flex-row">
        <ProductImages
          loading={false}
          imageUrls={imageUrls}
          price={100}
          previousPrice={500}
        />
        <ProductDetails
          title="Product title"
          rating={3.9}
          price="36.99"
          currency="ALL"
          previousPrice="40.99"
          reviewNr={18}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum nibh tellus molestie."
        />
      </div>
      <div className="flex flex-col flex-wrap px-1 pt-5">
        <div className="flex justify-between w-full pb-3 items-center px-4 pt-5">
          <h2 className="text-lg font-semibold">Related Products</h2>
          <Button
            className="rounded-xl px-4 py-2.5 hover:shadow-md hover:bg-white text-black hover:text-C2-default transition duration-500 ease-in-out"
            content="More Products"
            icon={Right}
            IconClassName="-mr-1.5"
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-2">
          {[...Array(4).fill(ProdCards)].map((el, index) => (
            <CardSmall
              key={index}
              classNameCard="w-full border border-C1-D h-fit
             relative rounded-xl"
              title={el.title}
              description={el.description}
              rating={el.rating}
              price={el.price}
              currency={el.currency}
              previousPrice={el.previousPrice}
              loading={false}
              redirectUrl={el.redirectUrl}
              imageUrl={el.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
