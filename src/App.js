import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieLists from './components/carosel';
import MovieDetails from './components/MovieDetail';
import MovieList from './components/Movies';
import Footer from './components/footer';





function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Navbar />
        <MovieLists />
        

        <Routes>
          <Route path='/' element={<MovieList />} />
          <Route path='/movies/:movieId' element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

