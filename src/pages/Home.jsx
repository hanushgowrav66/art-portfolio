import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Grid, Container, Typography } from "@mui/material";
const categories = [
  { name: "Paint", slug: "paint" },
  { name: "Pencil Sketch", slug: "pencil-sketch" },
  { name: "Digital Art", slug: "digital-art" },
  { name: "All Mixed", slug: "all" },
];
import "../styles.css";

export default function Home() {
  const [transformStyle, setTransformStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 10; // Scale movement
    const y = ((e.clientY - top) / height - 0.5) * 10;

    setTransformStyle({
      transform: `perspective(500px) rotateX(${y}deg) rotateY(${x}deg) scale(1.05)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: "perspective(500px) rotateX(0) rotateY(0) scale(1)",
    });
  };
  return (
    <Container maxWidth="lg" className="home-container">
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Profile Image */}
        <Grid item xs={12} md={6} className="profile-image-container">
          <img
            src="/art-portfolio/public/artprofile.jpg"
            alt="My Profile"
            className="profile-image"
            style={transformStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </Grid>

        {/* Right Side - Categories */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center", p: 4 }}>
            <h2 className="gallery-title">Categories</h2>
            <br></br>
            <Grid container spacing={3} className="categories-grid">
              {categories.map((category) => (
                <Grid item xs={6} key={category.slug}>
                  <Link
                    to={`/gallery/${category.slug}`}
                    className="category-box"
                    style={{ backgroundColor: "white" }}
                  >
                    <Typography variant="h4">{category.name}</Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
