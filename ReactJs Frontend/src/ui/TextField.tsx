import React from "react";
type InputProps = React.ComponentPropsWithoutRef<"input">;
const TextField = ({
  type,
  value,
  placeholder,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
      className="w-1/2 m-auto rounded-lg border-b-2 border-b-solid focus:border-b-[#C80A50] outline-none p-4 "
    />
  );
};

export default TextField;
