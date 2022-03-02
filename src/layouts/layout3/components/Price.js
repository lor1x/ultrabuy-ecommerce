import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import React from "react";

const Price = ({ price, setPrice }) => {
  return (
    <div className="w-full">
      <h4 className="font-semibold text-lg mb-4">Price</h4>
      <div>
        <Range
          min={0}
          max={1000}
          step={20}
          allowCross={false}
          onChange={(e) => {
            setPrice(e[0], e[1]);
          }}
          marks={true}
          trackStyle={[{ background: "#6A983C", borderRadius: "12px" }]}
        />
        <div className="flex items-center w-full mt-4">
          <div className="flex-1">
            <p className="font-semibold text-xs">Min</p>
            <div className="rounded-xl border border-c1-D bg-c1-F py-3 px-4 text-sm text-C1-C">
              {price.min}
            </div>
          </div>
          <hr className="w-1.5 mx-3.5 bg-C1-C" style={{ height: "2px" }} />
          <div className="flex-1">
            <p className="font-semibold text-xs">Max</p>
            <div className="rounded-xl border border-c1-D bg-c1-F py-3 px-4 text-sm text-C1-C">
              {price.max}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
