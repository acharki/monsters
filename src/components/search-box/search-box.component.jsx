import React from 'react';
import './search-box.styles.css';

const SearchBox = ({placeholder, handleChange}) => (
    <input type="search" autoFocus
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
);

export default SearchBox;