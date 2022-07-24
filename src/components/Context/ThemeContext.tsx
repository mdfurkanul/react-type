import React, { createContext } from "react";
import { theme } from "./theme";

interface ThemeContextProps {
  children: JSX.Element | React.ReactNode;
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
