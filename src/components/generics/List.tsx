import React from "react";
interface ListProps<T> {
  items: T[];
  onClick: (value: T) => void;
}
/* 
extends {id:string} or extends {}
*/
export const List = <T extends string | number>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h1>List of Items:</h1>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
