import React from 'react'
import './ResultCard.css'
import * as actions from '../reducerComp/ActionTypes'
import { useMovieContext } from '../context/GlobalContext'

const ResultCard = ({ movie }) => {
    const movieContext = useMovieContext()
    const storedMovie = movieContext.watchList.find((mov) => mov.imdbID === movie.imdbID) // movie.id === movie.id in watchlist return this object
    const storedMovieWatched = movieContext.watched.find((mov) => mov.imdbID === movie.imdbID)

    const watchListDisabeld = storedMovie ? true : storedMovieWatched ? true : false;
    const watchedDisabeld = storedMovieWatched ? true : false;
    return (
        <div className='result-card'>
            <div className='poster-wrapper'>
                {
                    movie.Poster ? (
                        <img src={movie.Poster} alt={movie.Title}></img>
                    ) : <div className='filter-poster'></div>
                }
            </div>
            <div className="info">
                <div className="header">
                    <h3 className='title'>{movie.Title}</h3>
                    {movie.Year ? <h4 className='release-date'>{movie.Year}</h4> : '-'}
                </div>

                <div className="controls">
                    <button className='btn'
                        onClick={() => {
                            movieContext.moviesDispatch({
                                type: actions.ADD_MOVIE_TO_WATCHLIST,
                                payload: movie
                            })
                        }}
                        disabled={watchListDisabeld}
                    >Add To Watch List</button>
                    <button className='btn'
                        onClick={() => {
                            movieContext.moviesDispatch({
                                type: actions.ADD_MOVIE_TO_WATCHED,
                                payload: movie
                            })
                        }}
                        disabled={watchedDisabeld}
                    >Add To  Watched</button>
                </div>
            </div>
        </div>

    )
}
export default ResultCard