import React from 'react';
import MovieCard from  './MovieCard/MovieCard';

const MovieList=({ movieList, ratingSearch, nameSearch }) =>{
    return (
        <div className='movielist'>
            {movieList 
        .filter(
          (el) =>
            el.rating >= ratingSearch &&
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim())
        )
        .map((el, i) => (
            <MovieCard key={i} movie={el} />
          ))
       }
        </div>
    );
};

export default MovieList;

