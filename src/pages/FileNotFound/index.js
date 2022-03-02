import React from "react";
import Lottie from "../../components/LottieAnimation";
import Animation5 from "../../images/anim_json/404_space_cluster.json";

const index = () => {
  const title = "Oh no, the page was not found";

  return (
    <>
      <div className="flex flex-col justify-center w-2/6 mx-auto">
        <Lottie animation={Animation5} title={title} />
      </div>
    </>
  );
};

export default index;
