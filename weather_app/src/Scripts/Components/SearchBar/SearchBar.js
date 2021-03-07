import React from 'react';
import Styles from './SearchBar.module.css';

class SearchBar extends React.Component{
    
    render(){
        return (
            <div className={Styles.SearchBar}>
              <input placeholder="Search Location"></input>
            </div>
          );
    }
}

export default SearchBar;
