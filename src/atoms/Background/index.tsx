import { ReactNode } from "react";

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = ({ children, color }: IBackgroundProps) => (
  <div className={color}>{children}</div>
);

export { Background };
