import React from 'react'
import CardControls from './CardControls'
 const MovieCard = ({movie,type}) => {
  return (
    <div className='movie-card'>
    <div className='overlay'></div>
    {
        movie.Poster ? (<img src={movie.Poster} alt={movie.Title}/>):(<div className='filter-poster'></div>)
    }
    <CardControls movie={movie} type={type}/>
    </div>
  )
}

export default MovieCard