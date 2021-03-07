import React from 'react';
import Styles from './StatisticPane.module.css';

class StatisticPane extends React.Component{
    
    render(){
        return (
            <div className={Styles.StatisticPane}>
              <div className={Styles.StatisticItem}>
                <p>Precipitation</p>
                <p>25%</p>
              </div>
              <div className={Styles.StatisticItem}>
               <p>Exercice Recommendation</p>
               <p>Outdoors</p>
              </div>
            </div>
          );
    }
}

export default StatisticPane;
