import React from "react";
import Lottie from "../../components/LottieAnimation";
import Animation3 from "../../images/anim_json/underconstr_wall.json";

const UnderConstructionPage = () => {
  const title = "Soon ™";

  return (
    <>
      <div className="flex flex-col justify-center w-2/6 mx-auto">
        <Lottie animation={Animation3} title={title} />
      </div>
    </>
  );
};

export default UnderConstructionPage;
