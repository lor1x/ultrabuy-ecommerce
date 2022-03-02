import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components";
import IconRight from "../../images/svg/ic-chevron-right.svg";

const Layout2 = ({
  title,
  buttonText,
  buttonUrl,
  children,
  classNameChildren,
}) => {
  const history = useHistory();
  return (
    <div className="xl:py-16 xl:px-11 md:py-8 md:px-6 p-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">{title}</div>
        <Button
          className="text-black hover:bg-C1-E transition ease-linear duration-200 rounded px-4 py-3 hover:shadow-none"
          content={buttonText}
          onClick={() => history.push(buttonUrl)}
          icon={IconRight}
          iconPosition="right"
          disabled={false}
        />
      </div>
      <div className={classNameChildren}>{children}</div>
    </div>
  );
};

export default Layout2;
