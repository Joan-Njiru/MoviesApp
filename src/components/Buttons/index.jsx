// CategoryButtonsContainer.jsx
import React from 'react';
import CategoriesButton from '../../atoms/ButtonCategories/categories';
import { useState } from 'react';
import './style.css'



const CategoryButtonsContainer = () => {
  const buttonLabels = ['All', 'Action', 'Comedy', 'Arabic', 'Series', 'Adventure','Other'];
  const [slide, setSlide] = useState(false);
  const handleSlide = () => {
    setSlide(!slide);
  };

  return (
    <div className="buttonsContainer">
      {buttonLabels.map((label, index) => (
        <CategoriesButton key={index} label={label} />
      ))}
      {}
         <div className='arrow' onClick={handleSlide}>
            
    
    </div>
    </div>

 
  );
};

export default CategoryButtonsContainer;
