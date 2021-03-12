import React from 'react';
import Styles from './StatisticPane.module.css';
import StatsElement from "./StatsElement/StatsElement.js"
import StatsElementRight from "./StatsElement/StatsElementRight.js"
import RainDrop from '../../../Images/RainDrop.svg'
import Shoes from '../../../Images/Shoes.svg'
import Sunset from '../../../Images/Sunset.svg'
import Sunrise from '../../../Images/Sunrise.svg'
import WeatherAPI from '../WeatherPane/WeatherAPI';

class StatisticPane extends React.Component{

  constructor(props){
    super(props)
    this.state={
      humidity:null,
      exercise:null,
      sunrise:null,
      sunset:null
    }
  }

  async componentDidMount(){
    let weatherData = await new WeatherAPI(51.5241,-0.0404)
    .fetchLocationWeatherData()
    .then(data => {return data})

    console.log(weatherData)
    this.setState({
      humidity: weatherData.main.humidity,
      exercise: this.getExerciseRecommendation(weatherData.main.humidity),
      sunrise: new Date(weatherData.sys.sunrise*1000).toLocaleTimeString(),
      sunset: new Date(weatherData.sys.sunset*1000).toLocaleTimeString()
    })
  }

  getExerciseRecommendation(){
    if(this.state.humidity >= 60){
      return "Indoors"
    }
    else{
      return "Outdoors"
    }
  }
    
    render(){
        return (
            <div className={Styles.StatisticPane}>
              <div className={Styles.Column1}>
                <StatsElement 
                  stats_name="Precipitation"
                  icon={RainDrop}
                  description={this.state.humidity + "%"}
                >
                </StatsElement>
                <hr className={Styles.Line}/>
              <StatsElement 
                  stats_name="Exercise Recommendation"
                  icon={Shoes}
                  description={this.state.exercise}
                >
                </StatsElement>
                <hr className={Styles.Line}/>
              </div>
              <div className={Styles.Column2}>
                <StatsElementRight 
                  stats_name="Sunrise"
                  icon={Sunrise}
                  description={this.state.sunrise}
                >
                </StatsElementRight>
                <StatsElementRight 
                  stats_name="Sunset"
                  icon={Sunset}
                  description={this.state.sunset}
                >
                </StatsElementRight>
              </div>
            </div>
          );
    }
}

export default StatisticPane;
