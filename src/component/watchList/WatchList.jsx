import React from 'react'
import { useMovieContext } from '../context/GlobalContext'
import  MovieCard  from '../MovieCard/MovieCard'
const WatchList = () => {
  const MovieContext = useMovieContext()
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className='heading'>My Watchlist</h1>
          <span className='count-pill'>
            {MovieContext.watchList.length}
            {MovieContext.watchList.length === 1 ? 'Movie' : 'Movies'}
          </span>
        </div>
        {
          MovieContext.watchList.length > 0 ? (
            <div className='movie-grid'>
              {MovieContext.watchList.map((movie)=>(
                <MovieCard key={movie.imdbID} movie={movie} type='watchList'/>
              ))}
            </div>
          ) : <h1 className='no-movies'>No Movies Found , Add Some..</h1>
        }

      </div>
    </div>
  )
}
export default WatchList 