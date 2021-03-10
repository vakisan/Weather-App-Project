import React from 'react';
import WeatherIcon from '../../WeatherIcon.js'
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
      let result = await new WeatherAPI()
      .fetchData()
      .then(data => {
        return (
          new WeatherIcon(data.weather[0].id)
          )
      });
      this.setState({
        image: result.getWeatherIcon(),
        message: result.getWeatherMessage()
      })
    }

    render(){
        return (
            <div className={Styles.WeatherPane}>
              <div className={Styles.WeatherInfo}>
                <img className={Styles.Image} src={this.state.image} alt={this.state.message}/>
                <div className={Styles.Stats}>
                  <p className={Styles.Temperature}>{KelvinToCelcius(this.props.temperature)}<sup className={Styles.Degree}>°C</sup></p>
                  <p className={Styles.Description}>{this.state.message}</p>
              </div>
              </div>
            </div>
          );
    }
}

export default WeatherPane;

/*
import React from 'react';
import WeatherIcon from './WeatherIcon.js'
import Styles from './WeatherPane.module.css';

class WeatherPane extends React.Component{

    constructor(props){
      super(props);
      //currently random weather icon is generated
      this.weatherConditions = Math.round(Math.random()*5)
      this.icon = new WeatherIcon(this.weatherConditions);
      this.hello = 1
      this.state = {
        API: {
          loading: true,
          location: null
        },
        icon: this.icon.getWeatherIcon(),
        message: this.icon.getWeatherMessage(),
        data: null
      }
    }

    async componentDidMount(){
      const response = await fetch(new WeatherAPI().url);
      const data = await response.json();
      this.setState({
        API: {
        location: data.Locations.Location[1].name,
        loading: false}
      });
      console.log(data)
    }

    render(){
        return (
            <div className={Styles.WeatherPane}>
              <div>
                <div>{this.state.API.loading || !this.state.API.location ? (<p>...Loading</p>) : (<p>{this.state.API.location}</p>) }</div>
                <img src={this.state.icon} alt={this.state.message}/>
              </div>
              <div className= {Styles.WeatherMessagePane}>
                <p>22°C</p>
                <p>{this.state.message}</p>
              </div>
            </div>
          );
    }
}

export default WeatherPane;

/*
import React from 'react';
import WeatherAPI from './WeatherAPI.js'
import WeatherIcon from './WeatherIcon.js'
import Styles from './WeatherPane.module.css';

class WeatherPane extends React.Component{

    constructor(props){
      super(props);
      //currently random weather icon is generated
      this.weatherConditions = Math.round(Math.random()*5)
      this.icon = new WeatherIcon(this.weatherConditions);
      this.hello = 1
      this.state = {
        API: {
          loading: true,
          location: null
        },
        icon: this.icon.getWeatherIcon(),
        message: this.icon.getWeatherMessage(),
        data: null
      }
    }

    async componentDidMount(){
      const response = await fetch(new WeatherAPI().locationUrl);
      const data = await response.json();
      this.setState({
        API: {
        location: data.Locations.Location[1].name,
        loading: false}
      });
      console.log(data.Locations.Location[1].name)
    }

    render(){
        return (
            <div className={Styles.WeatherPane}>
              <div>
                <div>{this.state.API.loading || !this.state.API.location ? (<p>...Loading</p>) : (<p>{this.state.API.location}</p>) }</div>
                <img src={this.state.icon} alt={this.state.message}/>
              </div>
              <div className= {Styles.WeatherMessagePane}>
                <p>22°C</p>
                <p>{this.state.message}</p>
              </div>
            </div>
          );
    }
}

export default WeatherPane;

*/
