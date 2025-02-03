import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Container, Typography } from "@mui/material";
const categories = [
  { name: "Paint", slug: "paint" },
  { name: "Pencil Sketch", slug: "pencil-sketch" },
  { name: "Digital Art", slug: "digital-art" },
  { name: "All Mixed", slug: "all" },
];
import "../styles.css";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", p: 4 }}>
        <h2 className="gallery-title">Categories</h2>
        <br></br>
        <br></br>
        <Grid container spacing={4} className="categories-grid">
          {categories.map((category) => (
            <Grid item xs={6} sm={6} md={6} key={category.slug}>
              <Link
                to={`/gallery/${category.slug}`}
                className="category-box"
                style={{ backgroundColor: "#127780" }}
              >
                <Typography variant="h4">{category.name}</Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
