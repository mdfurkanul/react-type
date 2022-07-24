import React from "react";
import { IHeading } from "../interfaces/IHeading";

export const Heading = ({ children }: IHeading) => {
  return <div>From Heading {children}</div>;
};
