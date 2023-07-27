
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import CategoryButtonsContainer from './components/Buttons';
import MoviesByCategory from './components/MoviesByCategory/moviebycategory';
// import ImageSlider from './components/ImageSlider/slider';
import SearchBar from './components/SearchBar/search';
import MovieDetails from './components/MovieDetails/details';
// import ImageSlider from './components/ImageSlider/slider';


function App() {
  return (
   
    
    <div className='MoviesApp'>
       {/* <ImageSlider/> */}
       <SearchBar/>
       <Router>
        <Routes>
       <Route exact path="/" component={MovieList} />
       <Route path="/movie/:movieId" component={MovieDetails} />
        <Route exact path="/" component={CategoryButtonsContainer} />
        <Route path="/category/:categoryName" component={MoviesByCategory} />
        </Routes> 
    </Router>
    <CategoryButtonsContainer/>
    <MovieList/>
    <MovieDetails/>
    </div>
  );
}

export default App;
