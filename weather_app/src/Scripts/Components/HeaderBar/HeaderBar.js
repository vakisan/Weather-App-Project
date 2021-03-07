import React from 'react';
import Styles from './HeaderBar.module.css';

class HeaderBar extends React.Component{
    
    render(){
        return (
            <div className={Styles.HeaderBar}>
              <p>Date</p>
              <p>Region</p>
              <p>Location</p>
              <hr></hr>
            </div>
          );
    }
}

export default HeaderBar;
