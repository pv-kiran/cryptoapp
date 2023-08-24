import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function Content() {
  return (
    <>
      <Box
        sx={{
          width: "78%",
          marginLeft: "28%",
          padding: "1rem",
          backgroundColor: "yellow",
        }}>
        <Outlet></Outlet>
      </Box>
    </>
  );
}

export default Content;
