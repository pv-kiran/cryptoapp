import { Stack } from "@mui/material";
import VerticalNav from "./VerticalNav";
import Content from "./Content";
import Swipeable from "./Swipeable";
import NavBar from "./NavBar";
import ContextNavigation from "../context/ContextNavigation";

function Landing() {
  // landing component - rendered on the landing page
  return (
    <ContextNavigation>
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
    </ContextNavigation>
  );
}

export default Landing;
