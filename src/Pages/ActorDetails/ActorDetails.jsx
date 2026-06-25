import React, { useEffect, useState } from 'react'
import { useParams, useNavigate ,Link} from 'react-router-dom';
import { fetchActorDetails, fetchActorMovies } from '../../Services/Index';
import './ActorDetails.scss'

const ActorDetails = () => {

    const {id} = useParams();
    const [actor,setActor] = useState(null);
    const [movies,setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetchActorDetails(id)
            .then((res)=>setActor(res));
        fetchActorMovies(id)
            .then((res)=>setMovies(res));
    },[id])

    if(!actor){
        return <h2>Loading...</h2>
    }

  return (
    <div className='actor-details'>
      <button onClick={() => navigate(-1)}>
            ← Back
          </button>
      <div className='actor-info'>
        <img
          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt={actor.name}
        />

        <div>
          <h1>{actor.name}</h1>

          <p>
            <strong>Birthday:</strong> {actor.birthday}
          </p>

          <p>
            <strong>Place of Birth:</strong>{' '}
            {actor.place_of_birth}
          </p>

          <p>{actor.biography}</p>
        </div>

      </div>
      <div className='actor-movies'>
        <h2>Movies</h2>

        <div className='movie-grid'>
            {
                movies.map((movie)=>(
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <img
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h4>{movie.title}</h4>
                    </Link>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default ActorDetails
