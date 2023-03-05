import React from "react";
import { Movie } from "./moviesData";
import { BiTime } from "react-icons/bi";

interface MovieProp {
  movie: Movie;
}
const MovieCard = ({ movie }: MovieProp) => {
  const { src, title, main, runtime } = movie;
  return (
    <div className="card">
      <img src={src} alt={title} className="w-full" />
      <div className="p-4 text-white">
        <h4>{title}</h4>
        <p>{main}</p>
      </div>
      <div className="badge">
        <BiTime />
        <p className="ml-1">{runtime}</p>
      </div>
    </div>
  );
};

export default MovieCard;
