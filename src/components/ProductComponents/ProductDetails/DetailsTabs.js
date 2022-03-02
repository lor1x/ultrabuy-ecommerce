import React, { useState, forwardRef, useImperativeHandle } from "react";
import Reviews from "../../Reviews/index";

const Tabs = forwardRef((props, ref) => {
  const [activeStatus, setActiveStatus] = useState(1);

  const showReviews = () => {
    setActiveStatus(2);
  };

  useImperativeHandle(ref, () => {
    return {
      showReviews: showReviews,
    };
  });

  const tabsData = [
    {
      title: "Description",
      placement: 1,
      count: 0,
    },
    {
      title: "Reviews",
      placement: 2,
      count: props.reviewsNr,
    },
    {
      title: "Questions",
      placement: 3,
      count: props.questionsNr,
    },
  ];

  return (
    <div className="flex flex-col py-2">
      <div className="flex py-10 px-2 items-center justify-center w-full">
        <ul className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row w-full items-center border-b border-gray-200 font-semibold">
          {tabsData.map((el, index) => (
            <div
              key={index}
              onClick={() => setActiveStatus(el.placement)}
              className={`flex w-full md:w-1/3 gap-x-5 items-center flex-row border-b border-transparent -mb-px cursor-pointer py-2 ${
                activeStatus === el.placement
                  ? " border-C2-default "
                  : " border-gray-200 "
              }`}
            >
              <li>{el.title}</li>
              <div
                className={
                  el.count > 0
                    ? "flex px-2.5 py-px rounded-lg bg-C1-E bg-opacity-70 text-C2-default text-xs font-semibold"
                    : null
                }
              >
                {el.count > 0 ? el.count : null}
              </div>
            </div>
          ))}
        </ul>
      </div>
      {activeStatus > 0 && (
        <div className="flex w-full border border-C2-default rounded-md h-full">
          {activeStatus === 1 && <div>Full product details</div>}
          {activeStatus === 2 && (
            <Reviews
              wrapperClassname="flex flex-col w-full justify-center items-center py-4"
              contentClassname="grid grid-cols-1 md:grid-cols-2"
            />
          )}
          {activeStatus === 3 && <div>Questions</div>}
        </div>
      )}
    </div>
  );
});

export default Tabs;
