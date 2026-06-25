import React, { useEffect, useState } from 'react';
import Home from '../Home/Index';
import Pagination from '../../Components/Pagination/Pagination';
import { fetchUpcomingMovies } from '../../Services/Index';

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUpcomingMovies(page)
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

export default Upcoming;