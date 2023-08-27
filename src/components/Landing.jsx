import { Stack } from "@mui/material";
import VerticalNav from "./VerticalNav";
import Content from "./Content";
import Swipeable from "./Swipeable";
import { createContext, useState } from "react";
import NavBar from "./NavBar";

export const NavigationContext = createContext();

function Landing() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <NavigationContext.Provider value={{ open, toggleDrawer }}>
      <NavBar></NavBar>
      <Stack
        direction="row"
        sx={{
          width: "90%",
          height: "80vh",
          margin: "auto",
          marginTop: "7rem",
        }}>
        <VerticalNav></VerticalNav>
        <Content></Content>
      </Stack>
      <Swipeable></Swipeable>
    </NavigationContext.Provider>
  );
}

export default Landing;
