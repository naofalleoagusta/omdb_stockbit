import { ReactNode } from "react";

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
  isFullVH?: boolean;
  isCentered?: boolean;
};

const Section = (props: ISectionProps) => (
  <div
    className={`${props.isFullVH ? "h-screen " : ""} ${
      props.isCentered ? "flex items-center justify-center " : ""
    }max-w-screen-lg mx-auto px-3 ${props.yPadding ? props.yPadding : "py-16"}`}
  >
    {props.children}
  </div>
);

export { Section };
