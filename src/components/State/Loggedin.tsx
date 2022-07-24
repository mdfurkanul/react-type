import React, { useState } from "react";

export const Loggedin = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const handleLogin = () => {
    setisLoggedIn(true);
  };
  const handleLogout = () => {
    setisLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h1>{isLoggedIn ? "User Logded in" : "User not logged out"}</h1>
    </div>
  );
};
