import React from "react";
import Button from "./../../components/Button";
import AV1 from "../../images/png/avatar(1).png";
import AV2 from "../../images/png/avatar(2).png";
import AV3 from "../../images/png/avatar(3).png";

const IndexPage = () => {
  return (
    <>
      <div className="mx-auto container py-12 px-4">
        <div className="w-full flex justify-center">
          <div className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-C2-C  to-C2-B md:py-8 md:px-8  px-5 py-4 xl:px-12 xl:py-16 rounded-xl">
            <div>
              <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex  items-center justify-center md:pt-0 pt-4 ">
                  <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl xl:leading-snug lg:w-10/12 text-white font-black leading-tight md:text-left text-center ">
                    Become a member and open yourself to a world of
                    possibilities
                  </h1>
                  <Button
                    className="mt-5 lg:mt-12 py-3 lg:py-4 px-4 lg:px-6 bg-white font-bold text-C2-default text-sm lg:text-lg xl:text-xl hover:opacity-90"
                    content="Join now!"
                  />
                </div>
                <div className="md:w-1/3 w-full">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center mt-8">
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                        <img className="w-full h-full" src={AV1} alt="" />
                      </div>
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full">
                        <img className="w-full h-full" src={AV2} alt="" />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                        <img className="w-full h-full" src={AV1} alt="" />
                      </div>
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                        <img className="w-full h-full" src={AV2} alt="" />
                      </div>
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full">
                        <img className="w-full h-full" src={AV3} alt="" />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                        <img className="w-full h-full" src={AV1} alt="" />
                      </div>
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full">
                        <img className="w-full h-full" src={AV3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
