import React from 'react';
import Styles from './NavigationElement.module.css';

class NavigationElement extends React.Component{

    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <div className={Styles.NavigationElement}>
                {this.props.text}
            </div>
          );
    }
}

export default NavigationElement;
