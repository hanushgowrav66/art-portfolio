import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Gallery() {
  const { category } = useParams();
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("/data/artworks.json")
      .then((response) => response.json())
      .then((data) => {
        if (category && category !== "all") {
          setArtworks(data.filter((art) => art.category === category));
        } else {
          setArtworks(data);
        }
      })
      .catch((error) => console.error("Error loading artworks:", error));
  }, [category]);

  return (
    <Box sx={{ width: "100%", margin: "auto", minHeight: 500 }}>
      <h2 className="gallery-title">
        {category
          ? category
              .replace("-", " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())
          : "Gallery"}
      </h2>
      <ImageList variant="masonry" cols={3} gap={20}>
        {artworks.map((art) => (
          <ImageListItem key={art.id}>
            <Link
              to={`/artwork/${art.id}`}
              style={{ textDecoration: "none", color: "red" }}
            >
              <img
                srcSet={`${art.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${art.imageUrl}?w=248&fit=crop&auto=format`}
                alt={art.title}
                loading="lazy"
                style={{ width: "100%" }}
              />
            </Link>
            <ImageListItemBar
              position="below"
              title={art.title}
              className="image-title-bar"
            />
            <br />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
