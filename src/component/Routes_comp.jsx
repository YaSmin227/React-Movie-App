import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import WatchList from './watchList/WatchList'
import Watched from './watched/Watched'
import AddMovies from './addMovies/AddMovies'
import ContextProvider from './context/GlobalContext';

const Routers = () => {
  return (
    <Router>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<WatchList />} />
          <Route path='/watched' element={<Watched />} />
          <Route path='/add' element={<AddMovies />} />
        </Routes>
      </ContextProvider>
    </Router>
  )
}

export default Routers;