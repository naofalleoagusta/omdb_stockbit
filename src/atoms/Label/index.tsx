import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Label: React.FC<Props> = ({ children }) => {
  return (
    <span className="bg-black px-2 text-white text-xs rounded-lg">
      {children}
    </span>
  );
};

export default Label;
