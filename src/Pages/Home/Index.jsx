import React from 'react';
import {Card,CardTitle,CardImage,CardDescription} from '../../Components/Card/Index';
import Carousal from '../../Components/Carousal/Carousal';
import './Index.scss'
import { Link } from 'react-router-dom';

const Index = ({ data = [] }) => {
  return (
    <div className="home">

    <Carousal movies={data}/>

      <div className="card-container">
        {data.map((item) => (
          <Link to={`/movie/${item.id}`}  key={item.id} >
            <Card key={item.id}>
            <CardImage src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}/>

            <CardTitle title={item.original_title} />

            <CardDescription description={item.overview.length > 100 ? item.overview.slice(0, 100) + '...': item.overview}/>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;