import React from "react";
export interface ProfileProps {
  name: string;
}
export const Profile = ({ name }: ProfileProps) => {
  return <div>Your Profile Name: {name}</div>;
};
