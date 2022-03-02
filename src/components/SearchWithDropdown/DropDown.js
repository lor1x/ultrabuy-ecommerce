import { Menu, Transition } from "@headlessui/react";
import React, { useState } from "react";
import DownIcon from "../../images/svg/ic-chevron-down.svg";

const DropDown = ({ classDropdown, values }) => {
  const [categoryValue, setCategoryValue] = useState("Categories");

  return (
    <Menu
      as="div"
      className={"border-C1-B pr-6 border-r flex w-36 " + classDropdown}
    >
      {({ open }) => (
        <div className="cursor-pointer flex w-full">
          <Menu.Button
            as="button"
            className="flex items-center outline-none w-full justify-between focus:outline-none"
          >
            <div className="font-bold text-sm ">{categoryValue}</div>
            <img className="ml-2" src={DownIcon} alt="" />
          </Menu.Button>
          <Transition
            show={open}
            className="absolute top-full left-0 w-36 bg-C1-E z-50 rounded-lg overflow-hidden"
            enter="transform transition duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items
              as="div"
              className="outline-none focus:outline-none z-50"
            >
              {values.map((value, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <div
                      className={
                        (active ? "bg-C2-C text-white " : "") +
                        "px-4 py-2 outline-none focus:outline-none"
                      }
                      onClick={() => setCategoryValue(value)}
                    >
                      {value}
                    </div>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
};

export default DropDown;
