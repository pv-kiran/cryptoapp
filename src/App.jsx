import { createContext, useState } from "react";
export const ThemeContext = createContext();
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import AppRoutes from "./routes";
import "./App.css";
function App() {
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // theme scheme settings
  const light = {
    palette: {
      mode: "light",
    },
  };

  const dark = {
    palette: {
      mode: "dark",
    },
  };
  return (
    <ThemeContext.Provider value={{ isDarkTheme, changeTheme }}>
      <ThemeProvider
        theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
        <CssBaseline></CssBaseline>
        <AppRoutes></AppRoutes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
