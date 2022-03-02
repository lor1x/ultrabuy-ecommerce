import { Button, CardCart, Input } from "../../index";

const orderPrice = [
  {
    title: "Subtotal",
    value: 73.98,
    currency: "ALL",
  },
  {
    title: "Tax",
    value: calculatePrc(73.98, 17),
    currency: "ALL",
  },
  {
    title: "Shipping",
    value: 0,
    currency: "ALL",
  },
];

function calculatePrc(num, prc) {
  return ((num / 100) * prc).toFixed(2);
}

function calculateSum(num, shipCost) {
  return (
    parseFloat(calculatePrc(73.98, 17)) +
    parseFloat(num) +
    parseFloat(shipCost)
  ).toFixed(2);
}

const OrderSum = ({ orderCost }) => {
  return (
    <div className="flex flex-col w-full lg:w-5/12 border border-C1-C border-opacity-80 rounded-xl order-first h-full lg:order-none px-2 py-3">
      <div className="flex flex-col items-center w-full pt-5 px-3">
        <h2 className="text-xl md:text-2xl pb-2 md:pb-3 w-full">
          Order Summary
        </h2>
        <div className="flex text-sm text-C1-C w-full">
          <h4>
            Price can change depending on shipping method and taxes of your
            state.
          </h4>
        </div>
      </div>

      <div className="flex flex-col gap-y-8 py-8">
        <CardCart rating="4.23" />
        <CardCart rating="4.23" />
        <CardCart rating="4.23" />
        <CardCart rating="4.23" />
        <CardCart rating="4.23" />
      </div>
      <div className="flex flex-col pt-2 py-2">
        {orderPrice.map((el, index, { length }) => (
          <div
            key={index}
            className={`flex flex-row justify-between py-2 ${
              index + 1 === length ? " pb-8 " : " "
            }`}
          >
            <p className="font-medium text-base">{el.title}</p>
            <span className="font-medium text-base">
              {el.value}
              {" " + el.currency}
            </span>
          </div>
        ))}
        <div className="flex flex-row ring-1 rounded-lg ring-C1-B ring-opacity-60 focus-within:ring-2 focus-within:ring-C2-default bg-gray-100">
          <div className="flex w-2/3  md:w-4/6">
            <Input
              placeholder="Apply promo code"
              error={false}
              type="text"
              className="flex h-full w-full"
              classInput="h-10 px-4 w-full focus:outline-none text-gray-700 bg-gray-100 border-opacity-0"
              classInputInside="w-full bg-gray-100"
              maxLength={10}
            />
          </div>
          <div className="flex w-1/3 md:w-2/6 justify-end">
            <Button
              className="rounded-lg px-2 md:px-4 py-2 hover:shadow-lg bg-gray-100 hover:bg-white text-gray-700 hover:text-C2-default transition duration-200 ease-linear"
              content="Apply now"
            />
          </div>
        </div>

        <div className="flex flex-row pt-5 pb-2 items-center justify-between">
          <div className="flex flex-col w-4/6">
            <p className="font-semibold text-sm">Total Order</p>
            <span className="text-C2-default text-xs font-extralight">
              Guaranteed delivery day: June 20, 2021
            </span>
          </div>
          <div className="flex justify-end w-2/6 font-medium text-C2-default text-xl">
            {calculateSum(73.98, 0)} ALL
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderSum;
