import React from 'react'
import { useMovieContext } from '../context/GlobalContext'
import * as actions from '../reducerComp/ActionTypes'
const CardControls = ({ type, movie }) => {
    const movieContext=useMovieContext()
    return (
        <div className='inner-card-controls'>
            {
                type === 'watchList' && (
                    <div>
                        <button
                            className="ctrl-btn"
                            onClick={() => {
                                movieContext.moviesDispatch({
                                    type: actions.ADD_MOVIE_TO_WATCHED,
                                    payload: movie
                                })
                            }}
                        >
                            <i className="fa-solid fa-eye"></i>
                        </button>
                        <button
                            className="ctrl-btn"
                            onClick={() => {
                                movieContext.moviesDispatch({
                                    type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                                    payload: movie
                                })
                            }}
                        >
                            <i className='fa-fw fa fa-times' />
                        </button>
                    </div>
                )
                
            }
            {
                type === 'watched' && (
                    <div>
                        <button
                            className="ctrl-btn"
                            onClick={() => {
                                movieContext.moviesDispatch({
                                    type: actions.MOVE_MOVIE_TO_WATCHLIST,
                                    payload: movie
                                })
                            }}
                        >
                            <i className="fa-solid fa-eye-slash"></i>
                        </button>
                        <button
                            className="ctrl-btn"
                            onClick={() => {
                                movieContext.moviesDispatch({
                                    type: actions.REMOVE_FROM_WATCHED,
                                    payload: movie
                                })
                            }}
                        >
                            <i className='fa-fw fa fa-times' />
                        </button>
                    </div>
                )

            }
        </div>
    )
}

export default CardControls