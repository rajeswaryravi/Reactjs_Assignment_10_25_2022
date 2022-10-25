import React from 'react';
import './css/SearchComponent.css';

function SearchComponent() {
  return (
    <div className="search">
        <input type="search" placeholder="Search here.."/>
        <input type="button" value="Search" className="search_btn"></input>
    </div>
  )
}

export default SearchComponent