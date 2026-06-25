import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export async function fetchTrendingMovies(page = 1) {
  const response = await axios.get(
    `${baseUrl}/trending/movie/week`,
    {
      params: {
        api_key: apiKey,
        page,
      },
    }
  );

  return response.data.results;
}

export async function fetchPopularMovies(page = 1) {
  const response = await axios.get(
    `${baseUrl}/movie/popular`,
    {
      params: {
        api_key: apiKey,
        page,
      },
    }
  );

  return response.data.results;
}

export async function fetchTopRatedMovies(page = 1) {
  const response = await axios.get(
    `${baseUrl}/movie/top_rated`,
    {
      params: {
        api_key: apiKey,
        page,
      },
    }
  );

  return response.data.results;
}

export async function fetchUpcomingMovies(page = 1) {
  const response = await axios.get(
    `${baseUrl}/movie/upcoming`,
    {
      params: {
        api_key: apiKey,
        page,
      },
    }
  );

  return response.data.results;
}

export async function fetchMoviesDetails(id) {
  const response = await axios.get(
    `${baseUrl}/movie/${id}`,
    {
      params: {
        api_key: apiKey,
      },
    }
  );

  return response.data;
}

export async function fetchMovieCast(id) {
  const response = await axios.get(
    `${baseUrl}/movie/${id}/credits`,
    {
      params: {
        api_key: apiKey,
      },
    }
  );

  return response.data.cast;
}

export async function fetchMovietrailer(id) {
  const response = await axios.get(
    `${baseUrl}/movie/${id}/videos`,
    {
      params: {
        api_key: apiKey,
      },
    }
  );

  return response.data;
}

export async function fetchActorDetails(id) {
  const response = await axios.get(
    `${baseUrl}/person/${id}`,
    {
      params: {
        api_key: apiKey,
      },
    }
  );

  return response.data;
}

export async function fetchActorMovies(id) {
  const response = await axios.get(
    `${baseUrl}/person/${id}/movie_credits`,
    {
      params: {
        api_key: apiKey,
      },
    }
  );

  return response.data.cast;
}