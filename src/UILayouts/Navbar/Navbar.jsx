import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

 const handleLogout = () => {
  localStorage.removeItem('accessToken');
  navigate('/login');
  window.location.reload();
};

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">🎬 404 MoviesInfo</Link>
      </div>

      <div className={`navbar__links ${menuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
        {/* <Link to="/profile">👤 Profile</Link> */}
      </div>

      <button
        className="navbar__logout"
        onClick={handleLogout}
      >
        Logout
      </button>

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