import React from 'react';
import Styles from './ForecastPane.module.css';
import HourlyForecast from './HourlyForecat.js'

class ForecastPane extends React.Component{

    render(){
        return (
            <div className={Styles.ForecastPane}>
              <HourlyForecast></HourlyForecast>
              <button className={Styles.GPSButton} onClick={this.getData}></button>
            </div>
          );
    }
}

export default ForecastPane;
