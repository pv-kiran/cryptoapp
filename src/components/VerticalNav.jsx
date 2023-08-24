import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import Forward10Icon from "@mui/icons-material/Forward10";
import InfoIcon from "@mui/icons-material/Info";
import { NavLink } from "react-router-dom";

function VerticalNav() {
  const navLinks = [
    { text: "Home", to: "/", icon: <HomeIcon></HomeIcon> },
    { text: "Top 10", to: "/new", icon: <Forward10Icon></Forward10Icon> },
    { text: "About", to: "/about", icon: <InfoIcon></InfoIcon> },
  ];

  return (
    <>
      <Box
        sx={{
          width: "25%",
          position: "fixed",
          height: "auto",
        }}>
        <nav aria-label="navigation links">
          <List>
            {navLinks.map((link, index) => {
              const { text, to, icon } = link;
              return (
                <ListItem
                  key={index}
                  component={NavLink}
                  to={to}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#e1eff2" : "",
                    borderRadius: isActive ? ".5rem" : "0",
                    border: isActive ? "2px #2c93b0 solid" : "none",
                    color: "#2c93b0",
                  })}
                  disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#2c93b0" }}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </nav>
      </Box>
    </>
  );
}

export default VerticalNav;
