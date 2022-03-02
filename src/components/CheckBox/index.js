import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import Checked from "../../images/svg/checked.svg";

const CheckBox = ({ selected, text, className, checkBg, name, activate }) => {
  const [enabled, setEnabled] = useState(selected);
  return (
    <div className="flex items-center">
      <Switch
        checked={enabled}
        onChange={() => {
          //activate(name);
          setEnabled(!enabled);
        }}
        className={`${
          enabled
            ? checkBg === "" || checkBg === undefined
              ? "bg-C2-default  border-C2-B "
              : checkBg
            : " bg-transparent border-C1-D "
        } relative border-2 transition duration-200 ease-linear outline-none focus:outline-none inline-flex items-center h-5 rounded-sm w-5 ${className}`}
      >
        <img
          className={`${
            enabled ? " opacity-100 " : " opacity-0 "
          } inline-block transition duration-200 ease-linear outline-none focus:outline-none`}
          src={Checked}
          alt=""
        />
      </Switch>
      <div
        className={`cursor-default ${
          text === "" || text === undefined || text === null ? " " : " ml-2 "
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default CheckBox;
