import React from 'react';
import Styles from './ForecastPane.module.css';

class ForecastPane extends React.Component{
    
    render(){
        return (
            <div className={Styles.ForecastPane}>
              <div>
                Insert Table Element here
              </div>
              <button className={Styles.GPSButton} onClick={this.getData}></button>
            </div>
          );
    }
}

export default ForecastPane;
