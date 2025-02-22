import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./compoenents/Card";
import ThemeBtn from "./compoenents/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const setDarkTheme = () => {
    setThemeMode("dark");
  };

  const setLightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, setDarkTheme, setLightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
