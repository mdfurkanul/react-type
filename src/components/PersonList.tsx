import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type PersonListProps = {
  names: {
    fName: string;
    lName: string;
  }[];
};

export const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name, indx) => {
        return (
          <h2 key={indx}>
            {name.fName} {name.lName} {indx}
          </h2>
        );
      })}
    </div>
  );
};
