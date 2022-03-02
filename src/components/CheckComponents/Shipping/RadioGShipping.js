import { RadioGroup } from "@headlessui/react";
import { RadioGr } from "../..";
import Tag from "../../Tag";

import DHL from "../../../images/svg/DHL.svg";
import FedEx from "../../../images/svg/FedEx.svg";
import Checked from "../../../images/svg/checked.svg";

const ship = [
  {
    name: "FedEx",
    price: "15$",
    icon: FedEx,
  },
  {
    name: "DHL",
    price: "32$",
    icon: DHL,
  },
];

const RadioGShip = () => {
  return (
    <>
      <RadioGr>
        {ship.map((el) => (
          <RadioGroup.Option
            key={el.name}
            value={el}
            className={({ checked }) =>
              `flex flex-row flex-wrap h-max w-full justify-between border border-C1-C rounded-lg px-2 sm:px-5 py-2 cursor-pointer focus:outline-none bg-c1-F
                  ${checked ? " border-C2-default " : " "}`
            }
          >
            {({ checked }) => (
              <>
                <div className="flex items-center w-1/2 sm:w-1/4 md:w-1/3 lg:w-1/4">
                  <div
                    className={`${
                      checked
                        ? "bg-C2-default  border-C2-B "
                        : " bg-transparent border-c1-D "
                    } border-2 transition duration-200 ease-linear outline-none focus:outline-none inline-flex items-center h-5 rounded-full w-5 px-px`}
                  >
                    <img
                      className={`${
                        checked ? " opacity-100 " : " opacity-0 "
                      } inline-block transition duration-200 ease-linear outline-none focus:outline-none`}
                      src={Checked}
                      alt=""
                    />
                  </div>
                  <div className="pl-6 font-medium">{el.name}</div>
                </div>
                <div className="flex justify-center sm:justify-evenly items-center gap-2 pt-2 sm:pt-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/2 order-last sm:order-none">
                  <div className="font-semibold text-C2-default">
                    + {el.price}
                  </div>
                  <Tag
                    value="Additional price"
                    onClick={() => console.log("123")}
                    displayIcon={false}
                    wrapperClassName="px-3 py-1 rounded-xl bg-C1-E"
                    textClassName="text-black font-medium"
                  />
                </div>
                <div className="flex items-center w-1/2 sm:w-1/4 md:w-1/3 lg:w-1/4 justify-end">
                  <img src={el.icon} alt="" />
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGr>
    </>
  );
};

export default RadioGShip;
