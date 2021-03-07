import React from 'react';
import Styles from './NavigationBar.module.css';

class NavigationBar extends React.Component{
    
    render(){
        return (
            <div className={Styles.NavigationBar}>
              <div className={Styles.NavigationBar}>
                <p>Today</p>
              </div>
              <div>
                <p>
                  Tommorrow
                </p>
              </div>
              <div>
                <p>
                  Week
                </p>
              </div>
            </div>
          );
    }
}

export default NavigationBar;
