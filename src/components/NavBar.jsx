import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Toggle from "./Toggle";
import CryptoSearch from "./CryptoSearch";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useContext } from "react";
import { NavigationContext } from "../context/ContextNavigation";

function NavBar() {
  // opening and closing the bottom swipeable - triggred by the icon
  const { toggleDrawer } = useContext(NavigationContext);
  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#222233" : "#fff", // Adjust colors as needed
        }}>
        <Toolbar>
          <Typography
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? "#fff" : "#474794", // Adjust colors as needed
              flexGrow: 1,
              display: {
                xl: "none",
                lg: "none",
                md: "block",
                sm: "block",
                xs: "block",
              },
            }}>
            <WidgetsIcon
              sx={{ fontSize: "2.75rem", margin: ".5rem" }}
              onClick={() => {
                toggleDrawer(true);
              }}></WidgetsIcon>
          </Typography>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: (theme) =>
                theme.palette.mode === "dark" ? "#fff" : "black",
              display: {
                xl: "block",
                lg: "block",
                md: "none",
                sm: "none",
                xs: "none",
              },
            }}>
            CoinBase
          </Typography>
          <CryptoSearch></CryptoSearch>
          <Toggle></Toggle>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
