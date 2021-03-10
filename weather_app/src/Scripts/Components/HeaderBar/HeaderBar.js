import React from 'react';
import Styles from './HeaderBar.module.css';

class HeaderBar extends React.Component{
  
  getDate(){
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let d = new Date();
    let dateString = `${days[d.getDay()]} ${d.getUTCDay()} ${month[d.getMonth()]} ${d.getFullYear()}`
    return dateString
  }


  render(){
      return (
        <div className={Styles.HeaderBar}>
          <p className={Styles.Date}>{this.getDate()}</p>
          <p className={Styles.Location}>Greater London</p>
          <p className={Styles.SpLocation}>{this.props.location}</p>
          <hr className={Styles.Line}></hr>
        </div>
       );
    }
}

export default HeaderBar;
