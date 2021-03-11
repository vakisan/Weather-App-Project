import React from 'react';
import WeatherIcon from './WeatherIcon.js'
import Styles from './WeatherPane.module.css';
import KelvinToCelcius from './KelvinToCelcius.js'
import WeatherAPI from './WeatherAPI.js'

class WeatherPane extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        image: null,
        message: "Loading",
        temperature: "Loading",
      }
    }

    async componentDidMount(){
      let weatherData = await new WeatherAPI(51.5241,-0.0404)
      .fetchLocationWeatherData()
      .then(data => {return data})

      let weatherIcon = new WeatherIcon(weatherData.weather[0].id)
      let tempData = KelvinToCelcius(weatherData.main.temp)

      this.setState({
        image: weatherIcon.getWeatherIcon(),
        message: weatherIcon.getWeatherMessage(),
        temperature: tempData
      })
    }

    render(){
        return (
            <div className={Styles.WeatherPane}>
              <div className={Styles.WeatherInfo}>
                <img className={Styles.Image} src={this.state.image} alt={this.state.message}/>
                <div className={Styles.Stats}>
                  <p className={Styles.Temperature}>{this.state.temperature}<sup className={Styles.Degree}>°C</sup></p>
                  <p className={Styles.Description}>{this.state.message}</p>
              </div>
              </div>
            </div>
          );
    }
}

export default WeatherPane;
