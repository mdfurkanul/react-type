import React, { createContext, useState } from "react";

interface AuthUser {
  name: string;
  email: string;
}

interface UserContextProps {
  children: JSX.Element | React.ReactNode;
}
interface UserContextProviderProps {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

export const UserContext = createContext({} as UserContextProviderProps);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
