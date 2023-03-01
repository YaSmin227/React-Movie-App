import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from '../reducerComp/Reducer';
// initialState
const initialState = {
    watchList: localStorage.getItem('watchList') ?
        JSON.parse(localStorage.getItem('watchList')) : [],
    watched: localStorage.getItem('watched') ?
        JSON.parse(localStorage.getItem('watched')) : []
}

// Golbal Context
export const GolbalContext = createContext(initialState);
// create provider

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(state.watchList))
        localStorage.setItem('watched', JSON.stringify(state.watched))
    }, [state])
    return (
        <GolbalContext.Provider value={{
            watchList: state.watchList,
            watched: state.watched,
            moviesDispatch: dispatch
        }}>
            {children}
        </GolbalContext.Provider>
    )
}

export default ContextProvider

// custom context for using globalContext

export const useMovieContext = () => {
    return useContext(GolbalContext)
}