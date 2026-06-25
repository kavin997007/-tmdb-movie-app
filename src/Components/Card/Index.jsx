import React from 'react';
// import "./Card.scss"

export const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

export const CardImage = ({ src }) => {
  return <img src={src} alt="movie" className="card-image" />;
};

export const CardTitle = ({ title }) => {
  return <h3 className="card-title">{title}</h3>;
};

export const CardDescription = ({ description }) => {
  return <p className="card-description">{description}</p>;
};