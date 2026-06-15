import MovieCard from './MovieCard';
import { useState } from 'react'
import './App.css'


const initialMovies = [
  { id: 1, title: "The Matrix",                         genre: "Sci-Fi",    year: 1999, watched: false },
  { id: 2, title: "Parasite",                           genre: "Thriller",  year: 2019, watched: false },
  { id: 3, title: "Everything Everywhere All at Once",  genre: "Sci-Fi",    year: 2022, watched: true  },
  { id: 4, title: "Knives Out",                         genre: "Mystery",   year: 2019, watched: false },
  { id: 5, title: "Coco",                               genre: "Animation", year: 2017, watched: true  },
  { id: 6, title: "Get Out",                            genre: "Horror",    year: 2017, watched: false },
]



export default function App() {
  const[movies, setMovies] = useState(initialMovies);

  function toggleWatched(movieId){
    const movieToggle = movies.map((movie)=> {
      if(movieId === movie.id) {
        return {...movie, watched: !movie.watched}
      }
      return movie;
    })
    setMovies(movieToggle);
  }

  let numMovies = movies.length;
  let numViewed = movies.filter((movie)=> {
    if(movie.watched === true){
      return movie
    }
    }).length
  let numNotViewed = numMovies - numViewed;

  return (
    <div>
    <h1>Movie Night</h1>
    <h2>Total Movies: {numMovies}   Watched: {numViewed}  UnWatched: {numNotViewed}</h2>
    {movies.map((movie) => <MovieCard key={movie.id} movie={movie} onToggle={toggleWatched}/>)}
    </div>
  )
}