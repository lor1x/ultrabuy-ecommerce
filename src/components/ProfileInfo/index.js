import React from "react";
import { Input, Select, Button } from "../../components";

const inputsCont = [
  {
    title: "First name",
    type: "text",
    name: "firstname",
  },

  {
    title: "Last name",
    type: "text",
    name: "lastname",
  },

  {
    title: "Email ",
    type: "email",
    name: "email",
  },

  {
    title: "Phone number",
    type: "tel",
    name: "phone",
  },

  {
    title: "Address",
    type: "text",
    name: "addres",
  },
  {
    title: "Town/City",
    type: "text",
    name: "city",
  },
];

const clsInput =
  "h-10 px-4 w-full rounded-lg focus:outline-none focus-within:border-C2-default text-gray-700 bg-gray-200";

const index = () => {
  return (
    <div>
      <h4 className="font-semibold text-lg mb-4">Personal Details</h4>
      <div className="flex flex-col items-center w-full md:w-10/12 lg:w-8/12">
        <div className="ml-2 flex flex-col sm:grid sm:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-6 lg:gap-y-8 pb-4 w-full justify-around">
          {inputsCont.map((el, index) => (
            <div key={index} className="flex justify-center">
              <Input
                label={el.title}
                placeholder={el.title}
                error={false}
                type={el.type}
                className="rounded-lg flex h-full w-full"
                classLabel="-mb-px ml-px"
                classInput={clsInput}
                classInputInside="w-full bg-gray-200"
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
            />
          </div>
          <div className="flex justify-center">
            <Input
              label="ZIP/Postal code"
              placeholder="ZIP or postal code"
              error={false}
              overflow-auto
              type="text"
              className="rounded-lg flex h-full w-full"
              classLabel="-mb-px ml-px"
              classInput={clsInput}
              classInputInside="w-full bg-gray-200"
            />
          </div>
          <div key={index} className="flex justify-center">
            <Input
              label="Change Password"
              placeholder="password"
              error={false}
              type="password"
              name="password"
              className="rounded-lg flex h-full w-full"
              classLabel="-mb-px ml-px"
              classInput={clsInput}
              classInputInside="w-full bg-gray-200"
            />
          </div>
          <div className="flex items-end content-center">
            <Button
              className="text-white text-sm border border-C2-B bg-C2-default rounded px-4 py-2
             hover:bg-white hover:text-C2-default transition duration-300 ease-linear hover:shadow"
              content="Update Info"
              disabled={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
