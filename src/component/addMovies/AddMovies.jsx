import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  ResultCard  from '../resultCard/ResultCard';
const AddMovies = () => {
    // search value state
    const [searchValue, SetSearchValue] = useState("");
    // movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=2872049e`)
            .then(response => {
                console.log(response.data);
                if (response.data.Search) {
                    setMovies(response.data.Search)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [searchValue])

    return (
        <div className='add-page'>
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder='Search for a movie'
                            value={searchValue}
                            onChange={(e) => SetSearchValue(e.target.value)}
                        />
                        {
                            movies.length > 0 && (
                                <ul className='results'>
                                    {movies.map(movie => (<li key={movie.imdbID}>{<ResultCard movie={movie} />}</li>))}
                                </ul>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMovies 