
import React from 'react';
import './style.css'

const CategoriesButton = ({ label, onClick }) => {
  return (
    <div className='categories'>
         <button id='categories' onClick={onClick} >
      {label}
    </button>

    </div>
  );
};

export default CategoriesButton;
