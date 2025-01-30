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
        height: "100vh",
        overflow: "hidden",
        textAlign: "center",
        bgcolor: "background.default",
        p: 3,
      }}
    >
      <p style={{ marginTop: "10px", fontSize: "25px", fontWeight: "500" }}>
        {artwork.description}
      </p>
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        style={{
          maxWidth: "90vw",
          maxHeight: "80vh",
          objectFit: "contain",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        }}
      />

      <Button
        onClick={() => navigate(-1)}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Back to Gallery
      </Button>
    </Box>
  );
}
