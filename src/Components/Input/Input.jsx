import React, { useEffect, useState } from 'react';
import {
  Card,
  CardImage,
  CardTitle,
  CardDescription,
} from '../Card/Index';
import { Link, useSearchParams } from 'react-router-dom';
import './Input.scss';

const API_KEY = '787be6f53332ac4e952ae7a69e11eb78';

const Input = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(
    searchParams.get('search') || ''
  );

  const [debouncedSearch, setDebouncedSearch] = useState(
    searchParams.get('search') || ''
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);

      if (search.trim()) {
        setSearchParams({ search });
      } else {
        setSearchParams({});
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [search, setSearchParams]);

  useEffect(() => {
    if (!debouncedSearch.trim()) {
      setMovies([]);
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${debouncedSearch}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []))
      .catch((err) => console.log(err));
  }, [debouncedSearch]);

  return (
    <div className="main-app">
      <input
        type="text"
        placeholder="Search Movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {movies.length > 0 && (
        <div className="movies-app">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="movie-link"
            >
              <Card>
                <CardImage
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : 'https://via.placeholder.com/500x750?text=No+Image'
                  }
                />

                <CardTitle title={movie.title} />

                <CardDescription
                  description={
                    movie.overview
                      ? movie.overview.slice(0, 100) + '...'
                      : 'No description available'
                  }
                />
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;