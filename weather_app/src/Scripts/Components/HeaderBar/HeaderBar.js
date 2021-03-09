import React from 'react';
import Styles from './HeaderBar.module.css';

class HeaderBar extends React.Component{
  
  getDate(){
    let date = new Date();
    let dateString = `${date.toDateString()}`
    return dateString
  }


  render(){
      return (
        <div className={Styles.HeaderBar}>
          <p>{this.getDate()}</p>
          <p>Greater London</p>
          <p>{this.props.location}</p>
          <hr></hr>
        </div>
       );
    }
}

export default HeaderBar;
