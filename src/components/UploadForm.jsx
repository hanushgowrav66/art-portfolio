import { useState } from "react";
import { uploadArtwork } from "../utils/supabase";

export default function UploadForm() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) {
      alert("Please select an image and enter a title.");
      return;
    }

    setLoading(true);
    const imageUrl = await uploadArtwork(file);

    if (imageUrl) {
      // Append new artwork to `artworks.json`
      const newArtwork = { title, imageUrl };

      fetch("/data/artworks.json")
        .then((res) => res.json())
        .then((data) => {
          const updatedArtworks = [...data, newArtwork];

          fetch("/data/artworks.json", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedArtworks),
          }).then(() => {
            alert("Artwork uploaded successfully!");
            setTitle("");
            setFile(null);
          });
        });
    } else {
      alert("Upload failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Upload New Artwork</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="file"
          className="w-full p-2 border rounded"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}
