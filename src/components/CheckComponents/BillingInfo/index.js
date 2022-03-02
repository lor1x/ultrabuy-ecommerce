import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import ShippingAdr from "./ShippingAdr";
import { Input, Select, CheckBox } from "../../../components";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  zip: "",
};

const clsInput =
  "h-10 px-4 w-full rounded-lg focus:outline-none focus-within:border-C2-default text-gray-700 bg-gray-200";

const BillingInfo = () => {
  const formik = useFormik({
    initialValues: { initialValues },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(75, "Name too long")
        .required("First name is required"),
      lastName: Yup.string()
        .max(75, "Name too long")
        .required("Last name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phone: Yup.string()
        .min(8, "Phone number too short")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Enter valid phone number"
        )
        .required("Phone number is required"),
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
      zip: Yup.string().required("ZIP is required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const inputsCont = [
    {
      title: "First name",
      type: "text",
      error: formik.errors.firstName ? true : false,
      errorMessage: formik.errors.firstName ? formik.errors.firstName : "",
      clsInput: ` ${
        formik.errors.firstName ? " " : " focus-within:border-C2-B "
      } `,
      dataProps: { ...formik.getFieldProps("firstName") },
    },

    {
      title: "Last name",
      type: "text",
      error: formik.errors.lastName ? true : false,
      errorMessage: formik.errors.lastName ? formik.errors.lastName : "",
      clsInput: ` ${
        formik.errors.lastName ? " " : " focus-within:border-C2-B "
      } `,
      dataProps: { ...formik.getFieldProps("lastName") },
    },

    {
      title: "Email address",
      type: "email",
      error: formik.errors.email ? true : false,
      errorMessage: formik.errors.email ? formik.errors.email : "",
      clsInput: ` ${formik.errors.email ? " " : " focus-within:border-C2-B "} `,
      dataProps: { ...formik.getFieldProps("email") },
    },

    {
      title: "Phone number",
      type: "tel",
      error: formik.errors.phone ? true : false,
      errorMessage: formik.errors.phone ? formik.errors.phone : "",
      clsInput: ` ${formik.errors.phone ? " " : " focus-within:border-C2-B "} `,
      dataProps: { ...formik.getFieldProps("phone") },
    },

    {
      title: "Address",
      type: "text",
      error: formik.errors.address ? true : false,
      errorMessage: formik.errors.address ? formik.errors.address : "",
      clsInput: ` ${
        formik.errors.address ? " " : " focus-within:border-C2-B "
      } `,
      dataProps: { ...formik.getFieldProps("address") },
    },

    {
      title: "Town/City",
      type: "text",
      error: formik.errors.city ? true : false,
      errorMessage: formik.errors.city ? formik.errors.city : "",
      clsInput: ` ${formik.errors.city ? " " : " focus-within:border-C2-B "} `,
      dataProps: { ...formik.getFieldProps("city") },
    },
  ];

  const [selected, setSelect] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <h2 className="text-xl md:text-2xl pb-1 md:pb-2 w-full">
          Billing info
        </h2>
        <div className="flex flex-col sm:flex-row text-sm text-C1-C justify-between w-full">
          <h5>Please enter your billing info</h5>
          <h5 className="py-2 sm:py-0">Step 1 of 5</h5>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-8 pt-8 pb-4 w-full justify-around">
          {inputsCont.map((el, index) => (
            <div key={index} className="flex justify-center">
              <Input
                label={el.title}
                placeholder={el.title}
                error={el.error}
                errorMessage={el.errorMessage}
                type={el.type}
                className="rounded-lg flex h-full w-full"
                classLabel="-mb-px ml-px"
                classInput={clsInput + el.clsInput}
                classInputInside="w-full bg-gray-200"
                {...el.dataProps}
              />
            </div>
          ))}
          <div className="flex justify-center">
            <Select
              label="State/Country"
              placeholder="Choose a state or country"
              error={false}
              errorMessage="error message"
              values={["Albania", "USA", "Italy"]}
              className="rounded-lg flex h-full w-full"
              classLabel="-mb-px ml-px"
              classSelect="h-10 px-4 w-full rounded-lg focus:outline-none bg-gray-200"
              classInput="bg-gray-200"
            />
          </div>
          <div className="flex justify-center">
            <Input
              label="ZIP/Postal code"
              placeholder="ZIP or postal code"
              type="text"
              className="rounded-lg flex h-full w-full"
              classLabel="-mb-px ml-px"
              classInput={
                clsInput +
                `${formik.errors.zip ? " " : " focus-within:border-C2-B "}`
              }
              classInputInside="w-full bg-gray-200"
              error={formik.errors.zip ? true : false}
              errorMessage={formik.errors.zip ? formik.errors.zip : ""}
              {...formik.getFieldProps("zip")}
            />
          </div>
          <div className="flex rounded-lg h-10 ring-1 ring-C1-C bg-c1-F justify-center w-max px-3 items-center">
            <div className="flex" onClick={() => setSelect(!selected)}>
              <CheckBox className="px-px" selected={selected} />
            </div>
            <p className="flex pl-2 cursor-default">
              Ship to a different address?
            </p>
          </div>
        </div>
        {selected ? <ShippingAdr /> : null}
      </div>
    </>
  );
};
export default BillingInfo;
