import React from "react";

type GreetProps = {
  name: string;
  count?: number;
  isLoggedIn: boolean;
};

export const Great = (props: GreetProps) => {
  const { count = 0 } = props;
  return (
    <div>
      {props.isLoggedIn && (
        <h1>
          Welcome {props.name}. You have {props.count} unread messages
        </h1>
      )}
    </div>
  );
};
