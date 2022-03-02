import RadioGShip from "./RadioGShipping";

const Shipping = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-y-4 items-center w-full">
          <h2 className="text-xl md:text-2xl pt-3 md:pt-5 w-full">
            Shipping method{" "}
          </h2>
          <div className="flex flex-col sm:flex-row text-sm text-C1-C justify-between w-full">
            <h5>Please selected your shipping method</h5>
            <h5 className="py-2 sm:py-0">Step 2 of 5</h5>
          </div>
          <RadioGShip />
        </div>
      </div>
    </>
  );
};
export default Shipping;
