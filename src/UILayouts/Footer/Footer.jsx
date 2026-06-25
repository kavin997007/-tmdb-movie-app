import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Link to="/"><h3>🎬 404 MoviesInfo</h3></Link>

        <p>
          Discover Popular, Top Rated and Upcoming Movies.
        </p>

        <div className="footer__links">
          <Link to="/">Home</Link>
          <Link to="/popular">Popular</Link>
          <Link to="/top-rated">Top Rated</Link>
          <Link to="/upcoming">Upcoming</Link>
        </div>

        <div className="footer__copyright">
          © 2026 404 MoviesInfo. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;