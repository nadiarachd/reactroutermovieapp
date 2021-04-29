 import React, {useState} from 'react';
import {moviesData} from './Components/moviesData';
import MovieList from './Components/MovieList';
import Search from './Components/SearchMovie/Search';
import AddMovie from './Components/AddMovie/AddMovie';
import {BrowserRouter,Route} from 'react-router-dom';
import MovieDesc from './Components/MovieDesc/MovieDesc';
import Trailer from './Components/Trailer/Trailer';

import './App.css';

function App() {
  const [movieList, setMovieList] = useState(moviesData);
const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);
  const [movies, setMovies]=useState(moviesData);
  const addMovie = (e, newMovie) => {
    e.preventDefault();
    setMovieList([...movieList,newMovie]);
    setMovies([...movies, newMovie]);
  };
  return (
    <BrowserRouter>
    <div className="App">
      <p className='titre'>Welcome to My Movies App</p>
      <Route exact path='/'
          render={() => (
            <>

      <Search
          nameSearch={nameSearch} 
          setNameSearch={setNameSearch}
          setRatingSearch={setRatingSearch}
          ratingSearch={ratingSearch}                                                                    
          />                                   
  
  
        
      <MovieList 
      movieList={movieList}
      nameSearch={nameSearch}
      ratingSearch={ratingSearch}/>
      <AddMovie addMovie={addMovie} />
      
      </>
         ) } />
    </div>
    <Route
          path="/movie/:Tiltle"
          render={(props) => <MovieDesc {...props} movies={movies} />}
        />
        <Route
          path="/trailer/:Tiltle"
          render={(props) => <Trailer {...props} movies={movies} />}
        />
    </BrowserRouter>
  );
}

export default App;
