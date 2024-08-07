import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const MaxWidthContainer = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-7xl m-auto flex flex-col items-center  ">
      {children}
    </div>
  );
};

export default MaxWidthContainer;
