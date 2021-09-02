import { createContext, ReactNode, useState, useContext } from "react";

type ThemeContextData = {
  darkTheme: boolean;
  toogleTheme: () => void;
};
type ThemeContextProviderProps = {
  children: ReactNode;
};
export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [darkTheme, setDarkTheme] = useState(false);

  function toogleTheme() {
    setDarkTheme(!darkTheme);
  }
  return (
    <ThemeContext.Provider value={{ darkTheme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
