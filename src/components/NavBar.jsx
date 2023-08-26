import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Toggle from "./Toggle";
import CryptoSearch from "./CryptoSearch";

function NavBar() {
  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#black" : "#fff", // Adjust colors as needed
        }}>
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: "#777",
              display: { xs: "none", sm: "block" },
            }}>
            CRYPTO
          </Typography>
          <CryptoSearch></CryptoSearch>
          <Toggle></Toggle>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
