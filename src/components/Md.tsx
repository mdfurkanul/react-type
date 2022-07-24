import React from "react";

type MdProps = {
  children: React.ReactNode;
};
export const Md = ({ children }: MdProps) => {
  return <div>From MD {children}</div>;
};
