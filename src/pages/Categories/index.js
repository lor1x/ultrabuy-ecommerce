import React, { useState } from "react";
import { CardBig, PageTitle, CardSmall, Pagination } from "../../components";
import Img from "../../images/png/product_image_test.jpg";
import { Layout3 } from "../../layouts";

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

const CategoryPage = () => {
  const [type, setType] = useState(() =>
    window.innerWidth >= 640 ? "grid" : "list"
  );
  return (
    <div className="flex flex-col px-6 md:py-0 lg:gap-14 md:gap-8 gap-4 md:w-11/12 mx-auto">
      <PageTitle
        title={"Fruit and vegetables"}
        type={type}
        setType={setType}
        tittleClassname="lg:text-4xl md:text-2xl text-lg"
      />
      <Layout3 childrenClassName="gap-3">
        {type !== "grid" &&
          Products.map((el, index) => (
            <CardBig
              classNameCard="my-3 ml-auto"
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
        {type === "grid" && (
          <div className="w-full flex flex-wrap">
            {Products.map((el, index) => (
              <CardSmall
                classNameCard="w-full md:w-1/2 lg:w-1/3"
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
      </Layout3>
      <Pagination />
    </div>
  );
};

export default CategoryPage;
