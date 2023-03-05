import React from "react";
import { moviesData } from "./moviesData";
import MovieCard from "./MovieCard";

const Trending = () => {
  return (
    <>
      <h3 className="border-b border-primary my-7 pb-3">Trending</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {moviesData.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn hover:scale-125 transition ease-out  duration-150">
          Load More
        </button>
      </div>
    </>
  );
};

export default Trending;
