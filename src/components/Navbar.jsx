import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "white", boxShadow: 3 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          // variant="h6"
          component={Link}
          to="/"
          className="navbar-logo"
        >
          Gowrav Arts <span>Gallery</span>
        </Typography>

        <Box className="navbar-links">
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/gallery/all" color="inherit">
            Gallery
          </Button>
          <Button component={Link} to="/contact" color="inherit">
            Contact
          </Button>
        </Box>

        <IconButton
          edge="end"
          color="black"
          aria-label="menu"
          onClick={handleDrawerToggle}
          className="menu-icon"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        className="mobile-drawer"
      >
        <List sx={{ width: 250 }}>
          <ListItem
            button
            component={Link}
            to="/"
            onClick={handleDrawerToggle}
            className="MuiListItem-button"
          >
            <ListItemText primary="Home" className="MuiListItemText-root" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/gallery/all"
            onClick={handleDrawerToggle}
            className="MuiListItem-button"
          >
            <ListItemText primary="Gallery" className="MuiListItemText-root" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/contact"
            onClick={handleDrawerToggle}
            className="MuiListItem-button"
          >
            <ListItemText primary="Contact" className="MuiListItemText-root" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
