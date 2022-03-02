import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button, Menu, CardSmall, Reviews } from "../../components";
import { Layout1 } from "../../layouts";

import Pat1 from "../../images/svg/Thur.svg";
import Pat2 from "../../images/svg/Waimakariri.svg";
import BIcon from "../../images/svg/ic-chevron-right.svg";
import Img from "../../images/png/product_image_test.jpg";

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
const Products = [
  {
    productName: "Product Name",
    description: "Space for a small product description",
    rating: 3.24,
    price: "36.99",
    currency: "All",
    previousPrice: "40.99",
    loading: false,
    imageUrl: { Img },
  },
  {
    productName: "Product Name",
    description: "Space for a small product description",
    rating: 3.24,
    price: "36.99",
    currency: "All",
    previousPrice: "40.99",
    loading: false,
    imageUrl: { Img },
  },
  {
    productName: "Product Name",
    description: "Space for a small product description",
    rating: 3.24,
    price: "36.99",
    currency: "All",
    previousPrice: "40.99",
    loading: false,
    imageUrl: { Img },
  },
];
const Links = [
  { text: "Bakery", url: "/" },
  { text: "Fruit and vegetables", url: "/" },
  { text: "Meat and fish", url: "/" },
  { text: "Drinks", url: "/" },
  { text: "Kitchen", url: "/" },
];

const HomePage = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const history = useHistory();

  const Patterns = [
    {
      title: "SUMMER SALE",
      hasState: show1,
      setFunc: setShow1,
      imgSrc: Pat1,
    },
    {
      title: "PICKS FOR YOU",
      hasState: show2,
      setFunc: setShow2,
      imgSrc: Pat2,
    },
  ];

  return (
    <div className="flex flex-col lg:gap-14 md:w-11/12 mx-auto">
      <Menu items={MenuItems} />
      <Layout1
        childrenClassName="flex flex-wrap -m-1"
        wrapperClassname="py-5 md:py-10 lg:py-3 w-11/12 mx-auto"
        title="Best selling products"
        links={Links}
        buttuonUrl="/"
        buttonContent="More Products"
      >
        <div className="flex flex-col md:flex-row items-center h-3/4 w-full md:ml-5 lg:ml-1 gap-y-6 md:gap-x-10 lg:gap-x-20 pt-8">
          {Patterns.map((e, index) => (
            <div
              key={index}
              className="flex self-center rounded-xl overflow-hidden transform cursor-pointer"
              onClick={() => history.push("/landing")}
            >
              <div
                key={index}
                className="flex rounded-xl w-full h-full justify-center items-center"
                onMouseEnter={() => {
                  e.setFunc(true);
                }}
                onMouseLeave={() => {
                  e.setFunc(false);
                }}
              >
                <div
                  className={`absolute rounded-xl justify-center items-center content-center flex w-full h-full bg-C2-default bg-opacity-40 z-10 ${
                    e.hasState
                      ? " bg-opacity-80 transform transition-all ease-linear duration-500 "
                      : " transform transition-all ease-out duration-500 "
                  }`}
                >
                  <p className="flex text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest hover:underline">
                    {e.title}
                  </p>
                </div>
                <img
                  className={`${
                    e.hasState
                      ? " transform transition-all ease-linear duration-500 scale-110 "
                      : " transform transition-all ease-out duration-500 scale-100 "
                  }`}
                  src={e.imgSrc}
                  alt=""
                />
                <Button
                  className={`text-black text-sm bg-white rounded-md px-4 py-2 hover:bg-white hover:text-C2-default hover:shadow absolute top-3/4 self-center mt-1 lg:mt-4 shadow-md transform transition-all ease-linear duration-300 ${
                    e.hasState ? " flex z-20 " : " hidden "
                  }`}
                  icon={BIcon}
                  iconPosition="right"
                  IconClassName="-mr-1"
                  content="Explore"
                />
              </div>
            </div>
          ))}
        </div>
      </Layout1>
      <Layout1
        childrenClassName="flex flex-wrap -m-1"
        wrapperClassname="py-5 md:py-10 lg:py-3 w-11/12 mx-auto"
        title="Best selling products"
        links={Links}
        buttuonUrl="/"
        buttonContent="More Products"
      >
        {Products.map((el, index) => (
          <div className="p-1 sm:w-1/2 lg:w-1/3 w-full" key={index}>
            <CardSmall
              classNameCard="w-full border border-C1-D rounded-lg"
              title="Product Name"
              description="Space for a small product description"
              rating={null}
              price="36.99"
              currency="All"
              previousPrice="40.99"
              loading={false}
              redirectUrl="/"
              imageUrl={Img}
            />
          </div>
        ))}
      </Layout1>
      <Reviews
        wrapperClassname="py-5 md:py-10 lg:py-3 w-11/12 lg:w-full mx-auto"
        reviewCardClassname="md:w-1/3"
      />
      <Layout1
        childrenClassName="flex flex-wrap -m-1"
        wrapperClassname="py-5 md:py-10 lg:py-3 w-11/12 mx-auto"
        title="Todays Offers"
        links={Links}
        buttuonUrl="/"
        buttonContent="More Products"
      >
        {Products.map((el, index) => (
          <div className="p-1 sm:w-1/2 lg:w-1/3 w-full" key={index}>
            <CardSmall
              classNameCard="w-full border border-C1-D rounded-lg"
              title="Product Name"
              description="Space for a small product description"
              rating={null}
              price="36.99"
              currency="All"
              previousPrice="40.99"
              loading={false}
              redirectUrl="/"
              imageUrl={Img}
            />
          </div>
        ))}
      </Layout1>
    </div>
  );
};

export default HomePage;
