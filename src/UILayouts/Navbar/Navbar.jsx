import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../../Components/firebase";
import logo from '../../assets/favicon.png';
import './Navbar.scss';
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

const handleLogout = async () => {
  await signOut(auth);

  localStorage.removeItem("accessToken");

  navigate("/login", { replace: true });
};

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="404 MoviesInfo" />
          <span>404 MoviesInfo</span>
        </Link>
      </div>

      <div className={`navbar__links ${menuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
        {/* <Link to="/profile">👤 Profile</Link> */}
        <button
        className="navbar__logout"
        onClick={handleLogout}
      >
        Logout
      </button>
      </div>

      

      <div
        className="navbar__hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;