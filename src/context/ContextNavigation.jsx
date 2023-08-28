/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const NavigationContext = createContext();

function ContextNavigation({ children }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <NavigationContext.Provider value={{ open, toggleDrawer }}>
      {children}
    </NavigationContext.Provider>
  );
}

export default ContextNavigation;
