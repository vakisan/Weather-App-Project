import React from 'react';
import Styles from './NavigationBar.module.css';
import NavigationElement from './NavigationElements/NavigationElement.js'

class NavigationBar extends React.Component{
    
    render(){
        return (
            <div className={Styles.NavigationBar}>
              <NavigationElement text="Today"/>
              <NavigationElement text="Tomorrow"/>
              <NavigationElement text="Week"/>
            </div>
          );
    }
}

export default NavigationBar;
