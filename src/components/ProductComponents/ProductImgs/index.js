import React from "react";

const ProductImages = ({ price, previousPrice, loading, imageUrls }) => {
  return (
    <div className="flex flex-col w-full h-full gap-y-3 pb-2 px-2 md:w-1/2">
      {!loading && (
        <div className="absolute transform translate-y-3 translate-x-3 rounded py-px px-2 bg-C1-D text-C2-default shadow-md text-xs font-semibold">
          {((-(previousPrice - price) / previousPrice) * 100).toFixed(2) + " %"}
        </div>
      )}
      {imageUrls.map((e, index) =>
        loading ? (
          <div
            key={index}
            className="bg-C1-D w-full h-96 rounded-xl animate-pulse"
          />
        ) : (
          <img
            key={index}
            className="w-full h-full rounded-xl bg-C1-D object-cover"
            src={e.imgUR}
            alt={e.alt}
          />
        )
      )}
    </div>
  );
};

export default ProductImages;
