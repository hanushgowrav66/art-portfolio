import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ArtworkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    fetch("/data/artworks.json")
      .then((response) => response.json())
      .then((data) => {
        const foundArtwork = data.find((art) => art.id === parseInt(id));
        setArtwork(foundArtwork);
      })
      .catch((error) => console.error("Error loading artwork details:", error));
  }, [id]);

  if (!artwork)
    return <h2 className="text-center text-red-500">Artwork not found!</h2>;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        textAlign: "center",
        p: 3,
      }}
    >
      <h2 className="artwork-title">{artwork.title}</h2>
      <p className="artwork-description">{artwork.description}</p>
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        style={{
          maxWidth: "90vw",
          maxHeight: "70vh",
          objectFit: "contain",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        }}
      />

      <Button
        className="contact-button"
        onClick={() => navigate(-1)}
        variant="contained"
        sx={{ mt: 2 }}
      >
        Back to Gallery
      </Button>
    </Box>
  );
}
