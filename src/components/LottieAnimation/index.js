import React from "react";
import { useHistory } from "react-router";
import Lottie from "lottie-react-web";
import { Button } from "..";

const Animation_404 = ({ animation, title, looping }) => {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="flex flex-col justify-center">
      <Lottie
        options={{
          animationData: animation,
          loop:
            looping === "" || looping === undefined || looping === null
              ? true
              : looping,
          autoplay: true,
        }}
        ariaRole=""
        title={title}
      />
      <div className="mx-auto mt-10">
        <Button
          className="text-white text-sm border border-C2-B bg-C2-default rounded px-4 py-2
             hover:bg-white hover:text-C2-default transition duration-300 ease-linear hover:shadow"
          content="Return Home"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Animation_404;
