import React from "react";

type H1Props = {
  title: string;
  className?: string;
};

const H1 = ({ title, className }: H1Props) => {
  return (
    <h1 className={`text-4xl text-center font-bold font-mono ${className}`}>
      {title}
    </h1>
  );
};

export default H1;
