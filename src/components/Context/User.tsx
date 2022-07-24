import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({ name: "MD", email: "md@furkanul.com" });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h1>User {userContext.user?.name}</h1>
      <h1>{userContext.user?.email}</h1>
    </div>
  );
};
