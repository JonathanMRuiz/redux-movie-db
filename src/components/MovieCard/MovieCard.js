import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ title, poster_path, release_date }) => {
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={title}
          />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{title}</h4>
            <p>{release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
