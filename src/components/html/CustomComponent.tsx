import React from "react";
import { Great } from "../Great";

export const CustomComponent = (props: React.ComponentProps<typeof Great>) => {
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
