import React, { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from './Pages/Home/Index';
import Popular from './Pages/Popular/Popular';
import TopRated from './Pages/TopRated/TopRated';
import Upcoming from './Pages/UpComming/UpComing';
import MovieDetails from './Pages/MoviesDetails/Index';
import ActorDetails from './Pages/ActorDetails/ActorDetails';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/Signup';
import Profile from './Pages/Profile/Profile';

import PrivateRoute from './Components/PrivateRoute';
import Navbar from './UILayouts/Navbar/Navbar';
import Footer from './UILayouts/Footer/Footer';

import Input from './Components/Input/Input';
import Pagination from './Components/Pagination/Pagination';

import {onAuthStateChanged} from 'firebase/auth';
import { auth } from './Components/firebase';

import { fetchTrendingMovies } from './Services/Index';

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const unsubscribe =
    onAuthStateChanged(
      auth,
      (user) => {
        setIsLoggedIn(!!user);
      }
    );

  return unsubscribe;
}, []);

  useEffect(() => {
    fetchTrendingMovies(currentPage)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <BrowserRouter>
      <div className="app">
      


        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route
  path="/"
  element={
    <PrivateRoute>
      <>
      <Navbar/>
      <Input />
        <Home data={data} />
        <Pagination
          currentPage={currentPage}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
        <Footer/>
      </>
    </PrivateRoute>
  }
/>
<Route
  path="*"
  element={
    isLoggedIn
      ? <Navigate to="/" replace />
      : <Navigate to="/login" replace />
  }
/>

          <Route
            path="/popular"
            element={
              <>
                <Navbar/>
                <Input />
                <Popular />
                <Footer/>
              </>
            }
          />

          <Route
            path="/top-rated"
            element={
              <>
                <Navbar/>
                <Input />
                <TopRated />
                <Footer/>
              </>
            }
          />

          <Route
            path="/upcoming"
            element={
              <>
                <Navbar/>
                <Input />
                <Upcoming />
                <Footer/>
              </>
            }
          />

        <Route
            path="/movie/:id"
            element={
              <>
                <Navbar/>
                <MovieDetails />
                <Footer/>
              </>
            }
          />

        <Route path="/actor/:id"
               element={
                <>
                  <Navbar/>
                  <ActorDetails/>
                  <Footer/>
                </>
               }
        />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;