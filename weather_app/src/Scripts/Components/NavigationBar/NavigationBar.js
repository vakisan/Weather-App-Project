import React from 'react';
import Styles from './NavigationBar.module.css';
import ButtonStyles from './NavigationElements/NavigationElement.module.css';
import NavigationElement from './NavigationElements/NavigationElement.js'

class NavigationBar extends React.Component{
    //constructor for the navigation bar
    constructor(props){
      super(props)
      this.setActiveTomorrow = this.setActiveTomorrow.bind(this)
      this.setActiveToday = this.setActiveToday.bind(this)
      this.setActiveWeek = this.setActiveWeek.bind(this)
      this.test = React.createRef();
      
      this.state = {
        TodayToggle: ButtonStyles.NavigationElementActive,
        TomorrowToggle: ButtonStyles.NavigationElement,
        WeekToggle: ButtonStyles.NavigationElement,
      }
    }
    //switches to weather forecast for tomorrow
    setActiveTomorrow(){
      this.setState({
        TodayToggle: ButtonStyles.NavigationElement,
        TomorrowToggle: ButtonStyles.NavigationElementActive,
        WeekToggle: ButtonStyles.NavigationElement,
      })
    }
    //switches to weather forecast for this week
    setActiveWeek(){
      this.setState({
        TodayToggle: ButtonStyles.NavigationElement,
        TomorrowToggle: ButtonStyles.NavigationElement,
        WeekToggle: ButtonStyles.NavigationElementActive,
      })
    }
    //switches to weather forecast for today
    setActiveToday(){
      this.setState({
        TodayToggle: ButtonStyles.NavigationElementActive,
        TomorrowToggle: ButtonStyles.NavigationElement,
        WeekToggle: ButtonStyles.NavigationElement,
      })
    }
    // Here the user can select which weather forcast they would like to see.
    // Todays, tomorrows or this week.
    render(){
        return (
            <div className={Styles.NavigationBar}>
              <NavigationElement text="Today" className={this.state.TodayToggle} click={this.setActiveToday}/>
              <NavigationElement text="Tomorrow" className={this.state.TomorrowToggle} click={this.setActiveTomorrow}/>
              <NavigationElement text="Week" className={this.state.WeekToggle} click={this.setActiveWeek}/>
            </div>
          );
    }
}

export default NavigationBar;
