import { createClient } from "@supabase/supabase-js";

// Replace with your actual Supabase credentials
const SUPABASE_URL = "https://gostunadwxbhuowwehkv.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvc3R1bmFkd3hiaHVvd3dlaGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNTIzODgsImV4cCI6MjA1MzgyODM4OH0.6oUxQ9eProz3Iv75hw5TpH6KXvhMii8PhgtuzzYkoFQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Function to upload an image to Supabase
export async function uploadArtwork(file) {
  const fileName = `${Date.now()}_${file.name}`; // Unique filename
  const { data, error } = await supabase.storage
    .from("artworks")
    .upload(fileName, file);

  if (error) {
    console.error("Upload error:", error.message);
    return null;
  }

  return `${SUPABASE_URL}/storage/v1/object/public/artworks/${fileName}`;
}

// Function to fetch all images from `artworks.json`
export async function fetchArtworks() {
  const response = await fetch("/data/artworks.json");
  return response.json();
}
