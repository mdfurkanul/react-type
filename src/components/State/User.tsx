import React, { useState } from "react";

interface AuthUser {
  name: string;
  email: string;
}

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({ name: "MD", email: "md@furkanul.com" });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h1>User {user?.name}</h1>
      <h1>{user?.email}</h1>
    </div>
  );
};
