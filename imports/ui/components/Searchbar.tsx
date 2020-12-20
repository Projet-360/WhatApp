import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledSearchbar from '../elements/StyledSearchbar';

const Searchbar = () => {
  return (
    <StyledSearchbar>
        <label className="searchbar--label">
        <FontAwesome
            name="search"
            className="searchbar--icon"
        />
            <input 
            className="searchbar--input"
            placeholder="Recherher ou démarrer une discussion"
            type="text"
            />
        </label>
    </StyledSearchbar>

  )
};

export default Searchbar;