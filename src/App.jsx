import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./components/Gallery";
import ArtworkDetail from "./components/ArtworkDetail";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/:category" element={<Gallery />} />
        <Route path="/artwork/:id" element={<ArtworkDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
