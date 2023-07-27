import React, { useState } from "react"
import './style.css';


const SearchBar = ({ onSearch  }) => {
    const [searchValue,setSearchValue] = useState("");

    const handleInput = (event)=>{
        setSearchValue(event.target.value);
        
    }

    const handleSearchClick = ()=>{
        onSearch(searchValue);
    }
    return(
        <div className="search">
            <ul>
           <li><h3>M<span id="ooh">oo</span>vie</h3></li> 
            <li><input id="searchbar"
             type="text" 
             placeholder="Search movies" 
             value={searchValue} 
            onChange={handleInput}/></li>
            <li><button id="but" onClick= {handleSearchClick}>Search</button></li>
            <li id="ooh"><u>Home</u></li>
            <li>MyList</li>
            <li ><button id="but2">Sign In</button></li>
            </ul>

            </div>
    )   
        
};
export default SearchBar;
