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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#127780", boxShadow: 3 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          className="navbar-logo"
        >
          Gowrav Arts
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
          color="inherit"
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
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <List sx={{ width: 250 }}>
          <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/gallery/all"
            onClick={handleDrawerToggle}
          >
            <ListItemText primary="Gallery" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/contact"
            onClick={handleDrawerToggle}
          >
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
