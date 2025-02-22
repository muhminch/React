import { createContext, useContext } from "react";

//Create Context
export const ThemeContext = createContext({
  themeMode: "light",
  setDarkTheme: () => {},
  setLghtTheme: () => {},
});
export default function UseTheme() {
  return useContext(ThemeContext);
}

//Create Context Provider
export const ThemeProvider = ThemeContext.Provider;
