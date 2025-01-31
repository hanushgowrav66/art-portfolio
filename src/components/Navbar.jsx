import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#127780", boxShadow: 3 }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo / Brand Name */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.5rem",
              "&:hover": { color: "#65b8c0" }, // Cool hover effect
            }}
          >
            Gowrav Arts
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              component={Link}
              to="/"
              sx={{
                color: "white",
                fontSize: "1rem",
                "&:hover": { bgcolor: "#cfdede", color: "#127780" },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/gallery/all"
              sx={{
                color: "white",
                fontSize: "1rem",
                "&:hover": { bgcolor: "#cfdede", color: "#127780" },
              }}
            >
              Gallery
            </Button>

            <Button
              component={Link}
              to="/contact"
              sx={{
                color: "white",
                fontSize: "1rem",
                "&:hover": { bgcolor: "#cfdede", color: "#127780" },
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
