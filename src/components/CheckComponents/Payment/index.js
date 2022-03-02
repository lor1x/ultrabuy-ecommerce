import RadioGPay from "./RadioGPayment";

const Payment = () => {
  return (
    <div className="flex w-full pt-5">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-y-4 items-center w-full">
          <h2 className="text-xl md:text-2xl pt-3 md:pt-5 w-full">
            Payment method
          </h2>
          <div className="flex flex-col sm:flex-row text-sm text-C1-C justify-between w-full">
            <h5>Please enter your payment method</h5>
            <h5 className="py-2 sm:py-0">Step 3 of 5</h5>
          </div>
          <RadioGPay />
        </div>
      </div>
    </div>
  );
};
export default Payment;
