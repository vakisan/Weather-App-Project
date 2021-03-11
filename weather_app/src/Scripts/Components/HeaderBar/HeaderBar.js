import React from 'react';
import Styles from './HeaderBar.module.css';

class HeaderBar extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      city: this.props.city,
      town: this.props.town
    }
  }
  
  getDate(){
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let d = new Date();
    let dateString = `${days[d.getDay()]} ${d.getUTCDay()} ${month[d.getMonth()]} ${d.getFullYear()}`
    return dateString
  }
  
  componentDidMount(){
    this.setState({
      city: this.props.city,
      town: this.props.town
    })
  }

  render(){
      return (
        <div className={Styles.HeaderBar}>
          <p className={Styles.Date}>{this.getDate()}</p>
          <p className={Styles.Location}>{this.props.city}</p>
          <p className={Styles.SpLocation}>{this.props.town}</p>
          <hr className={Styles.Line}></hr>
        </div>
       );
    }
}

export default HeaderBar;
