/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export const ThemeContext = createContext();

function ContextTheme({ children }) {
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
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ContextTheme;
