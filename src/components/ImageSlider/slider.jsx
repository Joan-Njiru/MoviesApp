
// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const ImageSlider = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
    
//     fetch('https://api.themoviedb.org/3/movie/movie_id/images')
//       .then(response => response.json())
//       .then(data => {
//         setMovies(data);
//       })
//       .catch(error => {
//         console.error('Error fetching images from the API:', error);
//       });
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <Slider {...settings}>
//       {movies.map((item) => (
//         <div key={item}>
//           <p>Great Movie</p>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default ImageSlider;
