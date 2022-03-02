import React from "react";
import { Button } from "../../components";
import IconRight from "../../images/svg/ic-chevron-right.svg";
import { Link, useHistory } from "react-router-dom";

const Layout1 = ({
  children,
  childrenClassName,
  title,
  links,
  buttuonUrl,
  buttonContent,
  wrapperClassname,
}) => {
  const history = useHistory();
  return (
    <div className={"flex lg:w-full flex-col md:flex-row " + wrapperClassname}>
      <div className="w-auto flex flex-col mb-3 md:w-1/4">
        <h4 className="font-semibold text-lg mb-4">{title}</h4>
        <ul className="-my-1.5 text-sm font-normal text-C2-default underline">
          {links.map((el, index) => (
            <Link key={index} to={el.url}>
              <li className="my-1.5">{el.text}</li>
            </Link>
          ))}
        </ul>
        <Button
          className="text-black bg-c1-F rounded px-4 py-3 hover:shadow-none mt-8 w-full lg:w-4/5"
          content={buttonContent}
          onClick={() => history.push(buttuonUrl)}
          icon={IconRight}
          iconPosition="right"
          disabled={false}
        />
      </div>
      <div className={"flex-1 " + childrenClassName}>{children}</div>
    </div>
  );
};

export default Layout1;
