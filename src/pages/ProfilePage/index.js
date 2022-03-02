import React, { useState } from "react";
import {
  Menu,
  ProfileInfo,
  PageTitle,
  CardBig,
  CardSmall,
} from "../../components";
import Img from "../../images/png/product_image_test.jpg";
import { Layout2 } from "../../layouts";

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
    title: "Product Name",
    description: "Space for a small product description",
    rating: "3.2",
    price: "36.99",
    currency: "All",
    previousPrice: "40.99",
    redirectUrl: `/product/1234`,
    img: Img,
  },
  {
    title: "Product Name",
    description: "Space for a small product description",
    rating: "3.2",
    price: "36.99",
    currency: "All",
    previousPrice: "40.99",
    redirectUrl: `/product/1234`,
    img: Img,
  },
  {
    title: "Product Name",
    description: "Space for a small product description",
    rating: "3.2",
    price: "36.99",
    currency: "All",
    previousPrice: "40.99",
    redirectUrl: `/product/1234`,
    img: Img,
  },
  {
    title: "Product Name",
    description: "Space for a small product description",
    rating: "3.2",
    price: "36.99",
    currency: "All",
    previousPrice: "40.99",
    redirectUrl: `/product/1234`,
    img: Img,
  },
  {
    title: "Product Name",
    description: "Space for a small product description",
    rating: "3.2",
    price: "36.99",
    currency: "All",
    previousPrice: "40.99",
    redirectUrl: `/product/1234`,
    img: Img,
  },
  {
    title: "Product Name",
    description: "Space for a small product description",
    rating: "3.2",
    price: "36.99",
    currency: "All",
    previousPrice: "40.99",
    redirectUrl: `/product/1234`,
    img: Img,
  },
  {
    title: "Product Name",
    description: "Space for a small product description",
    rating: "3.2",
    price: "36.99",
    currency: "All",
    previousPrice: "40.99",
    redirectUrl: `/product/1234`,
    img: Img,
  },
  {
    title: "Product Name",
    description: "Space for a small product description",
    rating: "3.2",
    price: "36.99",
    currency: "All",
    previousPrice: "40.99",
    redirectUrl: `/product/1234`,
    img: Img,
  },
  {
    title: "Product Name",
    description: "Space for a small product description",
    rating: "3.2",
    price: "36.99",
    currency: "All",
    previousPrice: "40.99",
    redirectUrl: `/product/1234`,
    img: Img,
  },
];

const ProductComponent = ({ listType, setListType, products, title }) => {
  return (
    <div>
      <PageTitle
        title={title}
        type={listType}
        setType={setListType}
        tittleClassname="text-lg"
      />
      {listType !== "grid" &&
        products.map((el, index) => (
          <CardBig
            classNameCard="my-3"
            key={index}
            title={el.title}
            description={el.description}
            rating={el.rating}
            price={el.price}
            currency={el.currency}
            previousPrice={el.previousPrice}
            loading={false}
            redirectUrl={el.redirectUrl}
            imageUrl={el.img}
          />
        ))}
      {listType === "grid" && (
        <div className="w-full flex flex-wrap">
          {products.map((el, index) => (
            <CardSmall
              classNameCard="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              key={index}
              title={el.title}
              description={el.description}
              rating={el.rating}
              price={el.price}
              currency={el.currency}
              previousPrice={el.previousPrice}
              loading={false}
              redirectUrl={el.redirectUrl}
              imageUrl={el.img}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProfilePage = () => {
  const [listType, setListType] = useState(() =>
    window.innerWidth >= 640 ? "grid" : "list"
  );
  return (
    <div className="flex flex-col gap-3 sm:gap-6 md:gap-10 lg:gap-14 w-11/12 mx-auto">
      <Menu items={MenuItems} />
      <ProfileInfo />
      <ProductComponent
        title="My wish List"
        listType={listType}
        setListType={setListType}
        products={Products}
      />
      <ProductComponent
        title="Previus Orders"
        listType={listType}
        setListType={setListType}
        products={Products}
      />
      <Layout2
        title="Section Headline"
        buttonText="Button"
        buttonUrl="/"
        classNameChildren="w-full flex flex-wrap mt-9 md:-mx-1"
      >
        {Products.slice(0, 4).map((el, index) => (
          <CardSmall
            classNameCard="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            key={index}
            title={el.title}
            description={el.description}
            rating={el.rating}
            price={el.price}
            currency={el.currency}
            previousPrice={el.previousPrice}
            loading={false}
            redirectUrl={el.redirectUrl}
            imageUrl={el.img}
          />
        ))}
      </Layout2>
    </div>
  );
};

export default ProfilePage;
