import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function Content() {
  // area where contents are getting displayed based on routes
  return (
    <>
      <Box
        sx={{
          width: { xl: "78%", lg: "78%", md: "100%", sm: "100%", xs: "100%" },

          marginLeft: { xl: "28%", lg: "28%", md: "0", sm: "0", xs: "0" },
          padding: ".4rem",
        }}>
        <Outlet></Outlet>
      </Box>
    </>
  );
}

export default Content;
