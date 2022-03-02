import { React } from "react";
import { RadioGroup } from "@headlessui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import valid from "card-validator";
import { Button, Input, RadioGr } from "../../index";

import VISA from "../../../images/svg/VISA.svg";
import MC from "../../../images/svg/mc.svg";
import PayPal from "../../../images/svg/PayPal 1.svg";
import Checked from "../../../images/svg/ic-actions-select-filled.svg";

const RadioGPay = () => {
  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      nameOnCard: "",
      expirationDate: "",
      cvc: "",
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .test(
          "test-number",
          "Card number is invalid",
          (value) => valid.number(value).isValid
        )
        .max(16, "Card number is invalid")
        .required("Card number is required"),
      cvc: Yup.string()
        .min(3, "Too short")
        .max(4, "Too long")
        .required("Required"),
      nameOnCard: Yup.string()
        .max(75, "Name too long")
        .required("Name is required"),
      expirationDate: Yup.string()
        .typeError("Wrong date")
        .max(5, "Wrong date")
        .matches(/([0-9]{2})\/([0-9]{2})/, "Wrong date")
        .test(
          "test-credit-card-expiration-date",
          "Wrong date",
          (expirationDate) => {
            if (!expirationDate) {
              return false;
            }

            const today = new Date();
            const monthToday = today.getMonth() + 1;
            const yearToday = today.getFullYear().toString().substr(-2);

            const [expMonth, expYear] = expirationDate.split("/");

            if (Number(expYear) < Number(yearToday)) {
              return false;
            } else if (
              Number(expMonth) < monthToday &&
              Number(expYear) <= Number(yearToday)
            ) {
              return false;
            }

            return true;
          }
        )
        .required("Date is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <RadioGr>
        <RadioGroup.Option
          value="Card"
          className={({ checked }) =>
            `flex flex-row h-max w-full justify-between border border-C1-C rounded-lg px-2 sm:px-5 py-2 cursor-pointer focus:outline-none
                  ${checked ? " border-C2-default bg-gray-50 " : " bg-c1-F "}`
          }
        >
          {({ checked }) => (
            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <div className="flex items-center w-1/2">
                  <div
                    className={`${
                      checked
                        ? "bg-C2-default  border-C2-default "
                        : " bg-transparent border-c1-D "
                    } border-2 transition duration-200 ease-linear outline-none focus:outline-none inline-flex items-center h-5 rounded-full w-6 sm:w-5`}
                  >
                    <img
                      className={`${
                        checked ? " opacity-100 " : " opacity-0 "
                      } inline-block transition duration-200 ease-linear outline-none focus:outline-none`}
                      src={Checked}
                      alt=""
                    />
                  </div>
                  <div className="pl-5 font-medium">Credit or Debit Card</div>
                </div>
                <div className="flex items-center w-1/2 justify-end">
                  <img className="px-2" src={VISA} alt="" />
                  <img src={MC} alt="" />
                </div>
              </div>

              {checked ? (
                <form onSubmit={formik.handleSubmit}>
                  <div className="flex py-3 justify-center">
                    <Input
                      label="Card number"
                      placeholder="Card number"
                      className="rounded-lg flex h-full w-full"
                      type="text"
                      classLabel="-mb-px ml-px"
                      classInput={`h-10 px-4 w-full rounded-lg focus:outline-none text-gray-700 bg-gray-200 ${
                        formik.errors.cardNumber
                          ? " "
                          : " focus-within:border-C2-B "
                      }`}
                      classInputInside="w-full bg-gray-200"
                      error={formik.errors.cardNumber ? true : false}
                      errorMessage={
                        formik.errors.cardNumber ? formik.errors.cardNumber : ""
                      }
                      {...formik.getFieldProps("cardNumber")}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row py-3 gap-x-4 justify-between">
                    <div className="flex w-full pb-3 sm:pb-0 sm:w-3/4">
                      <Input
                        label="Card holder"
                        placeholder="Card holder"
                        className="rounded-lg flex h-full w-full"
                        type="email"
                        classLabel="-mb-px ml-px"
                        classInput={`h-10 px-4 w-full rounded-lg focus:outline-none text-gray-700 bg-gray-200 ${
                          formik.errors.nameOnCard
                            ? " "
                            : " focus-within:border-C2-B "
                        }`}
                        classInputInside="w-full bg-gray-200"
                        error={formik.errors.nameOnCard ? true : false}
                        errorMessage={
                          formik.errors.nameOnCard
                            ? formik.errors.nameOnCard
                            : ""
                        }
                        {...formik.getFieldProps("nameOnCard")}
                      />
                    </div>
                    <div className="flex flex-row gap-x-3">
                      <Input
                        label="Expiration date"
                        placeholder="MM/YY"
                        className="rounded-lg flex h-full w-full"
                        classLabel="-mb-px ml-px"
                        classInput={`h-10 px-4 w-max rounded-lg focus:outline-none text-gray-700 bg-gray-200 ${
                          formik.errors.expirationDate
                            ? " "
                            : " focus-within:border-C2-B "
                        }`}
                        classInputInside="w-20 bg-gray-200 pl-4"
                        error={formik.errors.expirationDate ? true : false}
                        errorMessage={
                          formik.errors.expirationDate
                            ? formik.errors.expirationDate
                            : ""
                        }
                        {...formik.getFieldProps("expirationDate")}
                      />

                      <Input
                        label="CVC"
                        placeholder="CVC"
                        className="rounded-lg flex h-full w-full"
                        classLabel="-mb-px ml-px"
                        classInput={`h-10 px-4 w-max rounded-lg focus:outline-none text-gray-700 bg-gray-200 ${
                          formik.errors.cvc ? " " : " focus-within:border-C2-B "
                        }`}
                        classInputInside="w-8 bg-gray-200"
                        error={formik.errors.cvc ? true : false}
                        errorMessage={
                          formik.errors.cvc ? formik.errors.cvc : ""
                        }
                        {...formik.getFieldProps("cvc")}
                      />
                    </div>
                  </div>
                </form>
              ) : null}
            </div>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option
          value="PayPal"
          className={({ checked }) =>
            `flex flex-row h-max w-full justify-between border border-C1-C rounded-lg px-2 sm:px-5 py-2 cursor-pointer focus:outline-none
                  ${checked ? " border-C2-default bg-gray-50 " : " bg-c1-F "}`
          }
        >
          {({ checked }) => (
            <div className="flex flex-col w-full my-0.5">
              <div className="flex items-center">
                <div className="flex items-center w-1/2">
                  <div
                    className={`${
                      checked
                        ? "bg-C2-default  border-C2-default "
                        : " bg-transparent border-c1-D "
                    } border-2 transition duration-200 ease-linear outline-none focus:outline-none inline-flex items-center h-5 rounded-full w-5`}
                  >
                    <img
                      className={`${
                        checked ? " opacity-100 " : " opacity-0 "
                      } inline-block transition duration-200 ease-linear outline-none focus:outline-none`}
                      src={Checked}
                      alt=""
                    />
                    <div className="pl-6 font-medium">PayPal</div>
                  </div>
                </div>
                <div className="flex justify-end w-1/2">
                  <img src={PayPal} alt="" />
                </div>
              </div>
              {checked ? (
                <>
                  <div className="flex py-3 justify-center items-center">
                    <Button
                      content="Log in with PayPal"
                      className="text-blue-600 text-base font-bold rounded px-4 py-2 hover:bg-blue-600 hover:text-white border border-blue-600 transition duration-300 ease-linear hover:shadow-md"
                    />
                  </div>
                </>
              ) : null}
            </div>
          )}
        </RadioGroup.Option>
      </RadioGr>
    </>
  );
};
export default RadioGPay;
