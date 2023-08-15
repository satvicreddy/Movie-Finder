import './App.css';
import { useState, useEffect } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
const API_URL="http://www.omdbapi.com?apikey=105d5c2";

const movie={
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg",
  "Title": "Avengers Assemble",
  "Type": "series",
  "Year": "2012–2019",
  "imdbID": "tt2455546"
}

const App=()=>{
  const [movies, setMovies]=useState([]);
  const [searchTerm, setsearchTerm]=useState([]);

  const searchMovies=async(tittle)=>{
    const response=await fetch(`${API_URL}&s=${tittle}`);
    const data=await response.json();

    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('Avengers');
  },[]);

  return(
    <>
    <div className='App'>
      <h1>My Movies</h1>
      <div className='search'>
        <input type='text' placeholder='Movie name' value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)} />
        <img src={SearchIcon} alt='search' onClick={()=>searchMovies(searchTerm)}></img>
      </div>
      {
        movies?.length>0
        ?(
          <div className='container'>
            {movies.map((movie)=>(
              <MovieCard movie={movie}/>
            ))}
          </div>
        ):(
          null
        )
      }
    </div>
    </>
  );
}
export default App;
