import React from 'react'
import { useMovieContext } from '../context/GlobalContext'
import MovieCard from '../MovieCard/MovieCard'

const Watched = () => {
  const MovieContext = useMovieContext()
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className='heading'>My Watched</h1>
          <span className='count-pill'>
            {MovieContext.watched.length} 
            {MovieContext.watched.length === 1 ? 'Movie' : 'Movies'}
          </span>
        </div>
        {
          MovieContext.watched.length > 0 ? (
            <div className='movie-grid'>
              {MovieContext.watched.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} type='watched' />
              ))}
            </div>
          ) : <h1 className='no-movies'>No Movies Found , Add Some..</h1>
        }

      </div>
    </div>
  )
}

export default Watched 