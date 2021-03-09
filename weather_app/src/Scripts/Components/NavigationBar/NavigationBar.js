import React from 'react';
import Styles from './NavigationBar.module.css';

class NavigationBar extends React.Component{
    
    render(){
        return (
            <div className={Styles.NavigationBar}>
              <div className={Styles.TimeBox}>
                Today
              </div>
              <div className={Styles.TimeBox}>
                  Tommorrow
              </div>
              <div className={Styles.TimeBox}>
                  Week
              </div>
            </div>
          );
    }
}

export default NavigationBar;
