import React from "react";
interface InputProps {
  value: string;
  handleChange: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const HandleInputChange = (event: React.MouseEvent<HTMLInputElement>) => {
    console.log("input handle", event);
  };
  return <input value={props.value} onChange={(event) => HandleInputChange} />;
};
