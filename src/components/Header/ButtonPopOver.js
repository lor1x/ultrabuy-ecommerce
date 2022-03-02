import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";

import Person from "../../images/svg/ic-person.svg";

const values = [
  { name: "Account", url: "/profile" },
  { name: "Settings", url: "/profile" },
  { name: "Log Out", url: "/" },
];

const PopOver = () => {
  return (
    <Popover className="relative rounded px-2 py-2 hover:shadow-md transition-all ease-linear duration-300">
      {({ open }) => (
        <>
          <Popover.Button className="focus:outline-none flex content-center px-1 rounded focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <img src={Person} alt="" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-50 flex max-w-sm transform -translate-x-1/4 translate-y-4 -ml-1">
              <div className="flex flex-col bg-white ring-1 ring-C1-C ring-opacity-60 w-max px-2 py-2 rounded-lg shadow-xl">
                {values.map((value, index) => (
                  <Popover.Button key={index} onClick={() => (open = false)}>
                    <Link key={index} to={value.url}>
                      <p className="py-1 px-2 rounded-md text-sm hover:bg-C2-default hover:text-white transition-all ease-linear duration-100">
                        {value.name}
                      </p>
                    </Link>
                  </Popover.Button>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default PopOver;
