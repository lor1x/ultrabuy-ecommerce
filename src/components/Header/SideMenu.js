import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const SideMenu = ({ show, setShow, children, wrapperClass }) => {
  return (
    <Transition show={show} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0"
        open={show}
        onClose={setShow}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className="absolute inset-0 bg-opacity-75 bg-gray-900 transition-opacity"
              onClick={() => setShow(false)}
            />
          </Transition.Child>
          <div
            className={
              "fixed inset-y-0 right-0 flex z-40 border-2 " + wrapperClass
            }
          >
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              {children}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SideMenu;
