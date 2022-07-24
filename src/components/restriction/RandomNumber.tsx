import React from "react";
interface RandomNumbrValue {
  value: number;
}

interface IsPositive extends RandomNumbrValue {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
}

interface IsNegative extends RandomNumbrValue {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
}
interface IsZero extends RandomNumbrValue {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
}
type RandomNumberProps = IsPositive | IsNegative | IsNegative;

export const RandomNumber = ({
  value,
  isNegative,
  isPositive,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      <h2>
        RandomNumber: {value} is
        {isPositive && " Positive"}
        {isNegative && " Negative"}
        {isZero && " Zero"}
      </h2>
    </div>
  );
};
