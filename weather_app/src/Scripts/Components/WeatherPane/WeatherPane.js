import React from 'react';
import CloudySunny from '../../../Images/Cloudy sunny.svg'
import Styles from './WeatherPane.module.css';

class WeatherPane extends React.Component{
    
    render(){
        return (
            <div className={Styles.WeatherPane}>
              <div>
                <img src={CloudySunny}/>
              </div>
              <div className= {Styles.WeatherMessagePane}>
                <p>22</p>
                <p>Partly Cloudy</p>
              </div>
            </div>
          );
    }
}

export default WeatherPane;
