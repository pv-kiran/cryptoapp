import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import VerticalNav from "./VerticalNav";
import { Outlet } from "react-router-dom";

function Content() {
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
      <Box
        sx={{
          width: "75%",
          marginLeft: "28%",
          padding: "1rem",
          backgroundColor: "yellow",
        }}>
        <Outlet></Outlet>
      </Box>
    </Stack>
  );
}

export default Content;
