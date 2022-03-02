const Inputs = ({
  label,
  onChange,
  type,
  placeholder,
  error,
  errorMessage,
  focused,
  icon,
  iconPosition,
  className,
  classLabel,
  classInput,
  classInputInside,
  onClickIcon,
  iconClass,
  max,
  maxLength,
  min,
  minLength,
  id,
  name,
}) => {
  return (
    <div
      className={`flex rounded-lg ${
        (label === "" || label === undefined || label === null
          ? " "
          : " flex-col ") + className
      }`}
    >
      {label === " " || label === undefined || label === null ? null : (
        <label
          className={
            "font-bold text-xs transition-colors duration-100 leading-normal mb-1 " +
            classLabel
          }
        >
          {error
            ? errorMessage === "" ||
              errorMessage === undefined ||
              errorMessage === null
              ? label
              : errorMessage
            : label}
        </label>
      )}
      <div
        className={`flex text-sm focus:outline-none placeholder-C1-B transition-all duration-200 border rounded-lg items-center justify-between resize-x ${
          (error ? " border-red-500 " : " border-C1-D ") +
          (iconPosition === "right" ? " flex-row-reverse " : "") +
          classInput
        }`}
      >
        {icon && (
          <img
            className={`${
              iconClass + (iconPosition === "right" ? " ml-3 " : " mr-3 ")
            } w-4 h-4`}
            src={icon}
            alt=""
            onClick={onClickIcon}
          />
        )}
        <input
          className={`flex placeholder-C1-B focus:outline-none resize-x ${classInputInside}`}
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          max={max}
          minLength={minLength}
          min={min}
        />
      </div>
    </div>
  );
};

export default Inputs;
