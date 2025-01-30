import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function Gallery() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("/data/artworks.json")
      .then((response) => response.json())
      .then((data) => setArtworks(data))
      .catch((error) => console.error("Error loading artworks:", error));
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        minHeight: 500,
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {artworks.map((art) => (
          <ImageListItem key={art.imageUrl}>
            <Link to={`/artwork/${art.id}`} style={{ textDecoration: "none" }}>
              <img
                srcSet={`${art.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${art.imageUrl}?w=248&fit=crop&auto=format`}
                alt={art.title}
                loading="lazy"
                style={{
                  borderRadius: "8px",
                  width: "100%",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                }}
              />
            </Link>
            <ImageListItemBar
              position="below"
              title={art.title}
              sx={{
                textAlign: "center",
                display: "block",
              }}
            />
            <br />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
