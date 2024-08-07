import React from "react";
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "danger" | "warning";
  children?: React.ReactNode;
  className?: string;
};
const Button = ({
  type,
  onClick,
  variant,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const bgColor =
    variant === "primary"
      ? "bg-green-800"
      : variant === "secondary"
      ? "bg-blue-500"
      : variant === "danger"
      ? "bg-red-500"
      : variant === "warning"
      ? "bg-yellow-500"
      : "bg-pink-500";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        bgColor + " " + className
      }  px-5 py-2 text-white rounded-lg w-fit m-auto `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
