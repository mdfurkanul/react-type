import React from "react";
type PersonProps = {
  name: {
    fName: string;
    lName: string;
  };
};
export const Person = ({ name }: PersonProps) => {
  return (
    <div>
      <h1>
        {name.fName} {name.lName}
      </h1>
    </div>
  );
};
