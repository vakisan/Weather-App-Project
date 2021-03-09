import '../Styles/WeatherApp.css';
import SearchBar from './Components/SearchBar/SearchBar.js'
import HeaderBar from './Components/HeaderBar/HeaderBar.js'
import NavigationBar from './Components/NavigationBar/NavigationBar.js'
import WeatherPane from './Components/WeatherPane/WeatherPane.js'
import StatisticPane from './Components/StatisticPane/StatisticPane.js'
import ForecastPane from './Components/ForecastPane/ForecastPane.js'
import WeatherAPI from './WeatherAPI.js'
import React from 'react';

class WeatherApp extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      API: {
        loading: true,
        data: {
          temperature: null,
          conditions: null,
          location: null,
        }

      }
    }
  }

  async componentDidMount(){
    const result = await new WeatherAPI().fetchData()
    this.setState({
      API: {
        loading: false,
        data: {
          temperature: result.main.temp,
          conditions: result.weather[0].id,
          location: result.name
        }
      }
    })
    console.log(result)
  }
  
  render(){
    const path = this.state.API.data;
    return(
      <div className="Main_Screen">
        <SearchBar></SearchBar>
        <HeaderBar location={path.location}></HeaderBar>
        <NavigationBar></NavigationBar>
        <WeatherPane temperature={path.temperature} conditions={path.conditions}></WeatherPane>
        <StatisticPane></StatisticPane>
        <ForecastPane></ForecastPane>
        <hr></hr>
      </div>
    );
  }
}

export default WeatherApp;
