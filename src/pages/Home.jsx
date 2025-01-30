import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const categories = [
  { name: "All Mixed", slug: "all" },
  { name: "Paint", slug: "paint" },
  { name: "Pencil Sketch", slug: "pencil-sketch" },
  { name: "Digital Art", slug: "digital-art" },
];

export default function Home() {
  return (
    <Box sx={{ textAlign: "center", p: 4 }}>
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {categories.map((category) => (
          <Button
            key={category.slug}
            variant="contained"
            color="primary"
            component={Link}
            to={`/gallery/${category.slug}`} // Redirects to Gallery with selected category
            sx={{ m: 1 }}
          >
            {category.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
