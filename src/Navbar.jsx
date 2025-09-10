// Navbar.jsx
import { Link } from "react-router-dom";
import logo from "./assets/Education.png";
import "./Navbar.css";
import { FaFilePdf, FaFileWord, FaHome } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className="custom-navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <div>
          <h1 className="site-title">Library Connect</h1>
          <p className="site-tagline">Learn. Grow. Share. Free.</p>
        </div>
      </div>

      <ul className="navbar-links">
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/live-meetings">Meetings</Link></li>
        <li><Link to="/forms">Forms</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        {/* <li><Link to="/uploads">Secure Uploads</Link></li> */}
      </ul>
    </nav>
  );
}
