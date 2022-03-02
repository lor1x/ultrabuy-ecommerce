const Button = ({
  className,
  content,
  disabled,
  onClick,
  icon,
  iconPosition,
  badge,
  badgeCount,
  IconClassName,
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <>
      <button
        className={
          "flex justify-center rounded-md items-center focus:outline-none text-sm font-bold outline-none ease-linear transition-all duration-200 " +
          className +
          (iconPosition === "left" ? " flex-row-reverse" : " flex-row ") +
          (disabled ? " cursor-not-allowed" : "")
        }
        onClick={onClick && handleClick}
        disabled={disabled}
      >
        {content}
        {badge ? (
          <div className="absolute left-0 flex h-5 w-5 shadow-md items-center justify-center transform translate-x-2 translate-y-3 cursor-default font-light text-xs text-white bg-C4-B rounded-full">
            {badgeCount}
          </div>
        ) : (
          " "
        )}
        {icon ? (
          <img className={"mx-1 " + IconClassName} src={icon} alt="" />
        ) : (
          " "
        )}
      </button>
    </>
  );
};

export default Button;
