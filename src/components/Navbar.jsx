import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Gowrav Art Portfolio</h1>
        <div>
          <Link to="/" className="px-3">
            Home
          </Link>
          <Link to="/gallery" className="px-3">
            Gallery
          </Link>
          <Link to="/title" className="px-3">
            Title
          </Link>
          <Link to="/upload" className="px-3">
            Upload
          </Link>
        </div>
      </div>
    </nav>
  );
}
