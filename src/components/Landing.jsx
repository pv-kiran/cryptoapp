import { Stack } from "@mui/material";
import VerticalNav from "./VerticalNav";
import Content from "./Content";

function Landing() {
  return (
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
  );
}

export default Landing;
