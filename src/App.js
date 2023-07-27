
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import MovieList from './components/MovieList';
import CategoryButtonsContainer from './components/Buttons';
import MoviesByCategory from './components/MoviesByCategory/moviebycategory';

import MovieDetails from './components/MovieDetails/details';



function App() {
  return (
   
    
    <div className='MoviesApp'>
    
       <Router>
       <MovieList/>

        <Routes>
       <Route  path="/" element={<Navigate to ="/MovieList/"/>} />
       <Route path='/MovieList'  element={<MovieList/>}/>
       <Route path='/MovieDetails/:viewId'  element={<MovieDetails/>} />
        <Route path="/" component={CategoryButtonsContainer} />
        <Route path="/category/:categoryName" element={MoviesByCategory} />
        </Routes> 
    </Router>

    </div>
  );
}

export default App;
