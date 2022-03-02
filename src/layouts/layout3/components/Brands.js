import React from "react";
import { CheckBox } from "../../../components";

const Brands = ({ addbrand }) => {
  return (
    <div className="w-full mb-12">
      <h4 className="font-semibold text-lg mb-4">Brands</h4>
      <div className="-mb-3">
        <CheckBox
          activate={(name, selected) => addbrand(name, selected)}
          name="test-1"
          text="some text here"
          className="my-2"
        />
        <CheckBox
          activate={(name) => addbrand(name)}
          name="test-2"
          text="some text here"
          className="my-2"
        />
        <CheckBox
          activate={(name) => addbrand(name)}
          name="test-3"
          text="some text here"
          className="my-2"
        />
        <CheckBox
          activate={(name) => addbrand(name)}
          name="test-4"
          text="some text here"
          className="my-2"
        />
      </div>
    </div>
  );
};

export default Brands;
