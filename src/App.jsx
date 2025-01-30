import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import ArtworkDetail from "./components/ArtworkDetail";
import UploadForm from "./components/UploadForm";
import TitlebarBelowMasonryImageList from "./components/TitlebarBelowMasonryImageList";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <h2 className="text-center text-3xl p-6">
              Welcome to My Art Portfolio
            </h2>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/title" element={<TitlebarBelowMasonryImageList />} />
        <Route path="/artwork/:id" element={<ArtworkDetail />} />
        <Route path="/upload" element={<UploadForm />} />
      </Routes>
    </Router>
  );
}
