import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { useParams, useNavigate ,Link} from 'react-router-dom';

import {
  fetchMovieCast,
  fetchMoviesDetails,
  fetchMovietrailer,
} from '../../Services/Index';

import './Index.scss';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    fetchMoviesDetails(id)
      .then((res) => setMovie(res))
      .catch((err) => console.log(err));

    fetchMovieCast(id)
      .then((res) => setCast(res))
      .catch((err) => console.log(err));

    fetchMovietrailer(id)
      .then((res) => setTrailer(res.results[0]))
      .catch((err) => console.log(err));
  }, [id]);

  const opts = {
    width: '100%',
    height: '500',
    playerVars: {
      autoplay: 1,
    },
  };

  if (!movie) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <div className="movie-details">
        <div className="movie-poster-container">
          <button onClick={() => navigate(-1)}>
            ← Back
          </button>

          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="movie-info">
          <h1>{movie.title}</h1>

          <div className="movie-meta">
            <p>
              <strong>Rating:</strong> ⭐ {movie.vote_average}
            </p>

            <p>
              <strong>Runtime:</strong> {movie.runtime} min
            </p>

            <p>
              <strong>Language:</strong>{' '}
              {movie.original_language?.toUpperCase()}
            </p>

            <p>
              <strong>Release Date:</strong>{' '}
              {movie.release_date
                ?.split('-')
                .reverse()
                .join('-')}
            </p>
          </div>

          <div className="overview">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>

          {movie.genres?.length > 0 && (
            <div className="genres">
              <h3>Genres</h3>

              <div className="genre-list">
                {movie.genres.map((genre) => (
                  <span key={genre.id}>
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {cast.length > 0 && (
            <div className="cast-section">
              <h3>Movie Cast</h3>

              <div className="cast-list">
                {cast.slice(0,5).map((actor) => (

                  <Link to={`/actor/${actor.id}`}>
                    <div
                      className="cast-card"
                    >
                      <img
                        src={
                          actor.profile_path
                            ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                            : 'https://via.placeholder.com/185x278?text=No+Image'
                       }
                        alt={actor.name}
                      />

                      <h4>{actor.name}</h4>

                      <p>{actor.character}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {trailer && (
            <div className="trailer-btn-wrapper">
  <button
    className="trailer-btn"
    onClick={() => setShowTrailer(true)}
  >
    ▶ Watch Trailer
  </button>
</div>
          )}
        </div>
      </div>

      {showTrailer && trailer && (
  <div
    className="trailer-modal"
    onClick={() => setShowTrailer(false)}
  >
    <div
      className="trailer-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setShowTrailer(false)}
      >
        ✕
      </button>

      <YouTube
        videoId={trailer.key}
        opts={{
          width: "100%",
          height: "500",
          playerVars: {
            autoplay: 1,
          },
        }}
      />
    </div>
  </div>
)}
    </>
  );
};

export default MovieDetails;