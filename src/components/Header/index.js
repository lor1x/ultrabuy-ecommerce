import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { CardCart, Filter } from "..";
import CloseIcon from "../../images/svg/ic-actions-close.svg";
import Basket from "../../images/svg/ic-basket.svg";
import Burger from "../../images/svg/ic-hamburger.svg";
import Person from "../../images/svg/ic-person.svg";
import Button from "../Button";
import SearchWithDropdown from "../SearchWithDropdown";
import PopOver from "./ButtonPopOver";
import SideMenu from "./SideMenu";
import { Disclosure, Transition } from "@headlessui/react";
import FilterIcon from "../../images/svg/filterIcon.svg";
import SettingsIcon from "../../images/svg/ic-actions-settings.svg";

function MyDisclosure() {
  const location = useLocation();
  if (location.pathname.includes("/category")) {
    return (
      <Disclosure as="div" className="w-full ">
        {({ open }) => (
          <>
            <Disclosure.Button>
              <Button
                className="rounded py-2 pr-3 border-2 border-transparent hover:border-gray-600 hover:shadow-md transition-all ease-linear duration-300"
                icon={FilterIcon}
                iconPosition="left"
                content="Filter"
              />
            </Disclosure.Button>

            {open && (
              <Transition
                as="div"
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                className="my-3 w-full px-2.5"
              >
                <Disclosure.Panel>
                  <Filter />
                </Disclosure.Panel>
              </Transition>
            )}
          </>
        )}
      </Disclosure>
    );
  }
  return <></>;
}

const Header = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState(false);

  function handleClick() {
    setCart(false);
    history.push("/");
  }

  function goToCheckout() {
    setCart(false);
    history.push("/checkout");
  }

  return (
    <>
      <div className="py-5 lg:py-10 px-6 lg:px-16 flex justify-between">
        <div className="flex justify-center md:justify-start md:w-1/4 w-full lg:ml-0 lg:pb-0 lg:pr-0 md:pr-5">
          <div
            className="w-full lg:text-3xl text-2xl font-extrabold py-2 cursor-pointer filter hover:drop-shadow-2xl transition ease-linear duration-200"
            onClick={handleClick}
          >
            UltraBuy
          </div>

          <div className="flex md:hidden w-1/2 justify-end">
            <Button
              className="-mr-3 -mb-4"
              icon={Burger}
              onClick={() => setShow(true)}
            />
          </div>
        </div>
        <div className="hidden md:flex justify-center xl:max-w-xl lg:w-1/2 items-center">
          <SearchWithDropdown
            classContainer="rounded-xl flex w-full focus-within:border-C2-default"
            classSearch="flex md:pl-3 w-full"
            classDropdwon="z-50"
          />
        </div>
        <div className="hidden md:flex justify-end md:w-1/4 lg:mr-0 items-center">
          <div className="flex justify-around">
            <PopOver />

            <Button
              className="rounded relative px-2 py-2 hover:shadow-md transition-all ease-linear duration-300"
              icon={Basket}
              badge={true}
              badgeCount="4"
              onClick={() => setCart(!cart)}
            />
          </div>
        </div>
      </div>
      <SideMenu show={show} setShow={setShow} wrapperClass="sm:w-3/4 w-full">
        <div className="relative w-full bg-white shadow-xl">
          <div className="absolute top-0 right-0 px-2 pb-2 flex">
            <Button
              className="pr-2 pt-5"
              icon={CloseIcon}
              onClick={() => setShow(false)}
            />
          </div>
          <div className="h-full flex flex-col py-3 overflow-y-scroll w-11/12 mx-auto">
            <div className="px-4 mb-6">
              <div className="mb-6"></div>
            </div>
            <div className="flex w-full flex-col items-start px-2">
              <div className="flex justify-center self-center py-3 md:w-3/4 w-full">
                <SearchWithDropdown
                  classContainer="rounded-xl w-full"
                  classSearch="flex pl-3 w-full"
                  classDropdwon="z-50"
                />
              </div>
              <div className=" z-20">
                <Button
                  className="rounded py-2 border-2 border-transparent hover:border-gray-600 hover:shadow-md transition-all ease-linear duration-300 pr-3"
                  icon={Person}
                  iconPosition="left"
                  content="Account"
                  onClick={() => {
                    history.push("/profile");
                    setShow(!show);
                  }}
                />
              </div>
              <div className="sm:-mr-1  z-20">
                <Button
                  className="rounded py-2 border-2 border-transparent hover:border-gray-600 hover:shadow-md transition-all ease-linear duration-300 pr-3"
                  icon={Basket}
                  iconPosition="left"
                  content="Cart"
                  onClick={() => {
                    goToCheckout();
                    setShow(!show);
                  }}
                />
              </div>
              <MyDisclosure />
              <div className="sm:-mr-1 z-20">
                <Button
                  className="rounded py-2 border-2 border-transparent hover:border-gray-600 hover:shadow-md transition-all ease-linear duration-300 pr-3"
                  icon={SettingsIcon}
                  iconPosition="left"
                  content="Settings"
                  IconClassName="w-6 h-6"
                  onClick={() => {
                    history.push("/profile");
                    setShow(!show);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </SideMenu>
      <SideMenu
        show={cart}
        setShow={setCart}
        wrapperClass="sm:w-3/4 w-full max-w-md sm:rounded-lg sm:my-2 sm:right-1.5"
      >
        <div className="w-full h-full bg-white px-4 py-8 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-semibold text-2xl">Shopping cart</h4>
            <span className="flex items-center gap-1 text-sm text-c1">
              <Button
                className=""
                icon={CloseIcon}
                onClick={() => setCart(!cart)}
              />
            </span>
          </div>
          <div className="flex flex-col gap-8 overflow-y-scroll">
            <CardCart rating="4.23" />
            <CardCart rating="4.23" />
            <CardCart rating="4.23" />
            <CardCart rating="4.23" />
            <CardCart rating="4.23" />
          </div>
          <div className="mt-auto pt-2">
            <p className="font-semibold text-sm">Subtotal</p>
            <span className="font-semibold text-2xl mt-2 mb-6">73.98 ALL</span>
            <div className="flex justify-between items-center p-4 border border-t border-C1-E font-bold">
              <Button
                className="text-black text-sm rounded px-4 py-2 hover:bg-C2-default hover:text-white border border-C2-B transition duration-300 ease-linear hover:shadow"
                content="Continue shopping"
                onClick={handleClick}
              />
              <Button
                className="text-white text-sm border border-C2-B bg-C2-default rounded px-4 py-2
             hover:bg-white hover:text-C2-default transition duration-300 ease-linear hover:shadow"
                content="Go to Checkout"
                onClick={goToCheckout}
              />
            </div>
          </div>
        </div>
      </SideMenu>
    </>
  );
};
export default Header;
