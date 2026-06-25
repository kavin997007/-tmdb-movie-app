import React, { useEffect, useState } from 'react';
import Home from '../Home/Index';
import Pagination from '../../Components/Pagination/Pagination';
import { fetchPopularMovies } from '../../Services/Index';

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPopularMovies(page)
      .then((res) => setMovies(res))
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <>
      <Home data={movies} />

      <Pagination
        currentPage={page}
        handlePrevious={() =>
          page > 1 && setPage(page - 1)
        }
        handleNext={() => setPage(page + 1)}
      />
    </>
  );
};

export default Popular;