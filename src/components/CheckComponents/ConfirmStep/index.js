import { CheckBox, Button } from "../../../components";

import Guard from "../../../images/svg/Vrstva 302.svg";

const ConfirmStep = () => {
  return (
    <>
      <div className="flex flex-col pt-10">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-xl md:text-2xl pb-1 md:pb-2 w-full">
            Confirmation
          </h2>
          <div className="flex flex-col sm:flex-row text-sm text-C1-C justify-between w-full">
            <h5>
              We are getting to the end. Just few clicks and your order is
              ready!
            </h5>
            <h5 className="py-2 sm:py-0">Step 5 of 5</h5>
          </div>
          <div className="flex w-full flex-col text-sm py-2">
            <div className="flex flex-row rounded-lg h-10 ring-1 ring-C1-C bg-c1-F justify-center items-center w-auto sm:w-max px-3 my-2">
              <CheckBox className="pl-px" selected={false} />
              <p className="pl-2 cursor-default">
                Agree with sending marketing and newsletter emails. No spam,
                promissed!
              </p>
            </div>
            <div className="flex flex-row rounded-lg h-10 ring-1 ring-C1-C bg-c1-F justify-start items-center w-auto sm:w-max px-3 my-2">
              <CheckBox className="pl-px" selected={false} />
              <p className="pl-2 cursor-default">
                I agree with your{" "}
                <span className="underline cursor-pointer">
                  Terms and Conditions
                </span>{" "}
                and{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>
                .
              </p>
            </div>
          </div>
        </div>
        <Button
          className="w-max border-2 border-C2-B mt-1 rounded-lg px-6 py-3 hover:shadow-none transition duration-200 bg-C2-default hover:bg-white text-white hover:text-C2-default ease-linear"
          content="Complete Order"
        />

        <div className="flex flex-col justify-start w-2/5 pt-6">
          <img className="self-start py-2" src={Guard} alt="" />
          <div className="flex flex-col text-sm">
            <h2 className="pb-1 md:pb-2 font-bold">All your data is safe</h2>
            <h5 className="text-C1-C">
              We are using the most advanced security to provide you the best
              experience ever.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConfirmStep;
