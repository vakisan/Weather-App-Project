import Styles from '../Styles/WeatherApp.css';
import SearchBar from './Components/SearchBar/SearchBar.js'
import HeaderBar from './Components/HeaderBar/HeaderBar.js'
import NavigationBar from './Components/NavigationBar/NavigationBar.js'
import WeatherPane from './Components/WeatherPane/WeatherPane.js'
import StatisticPane from './Components/StatisticPane/StatisticPane.js'
import ForecastPane from './Components/ForecastPane/ForecastPane.js'
import WeatherAPI from './Components/WeatherPane/WeatherAPI.js'
import React from 'react';
import Background from '../Images/LondonBigBen.png'
import Sun from '../Images/SunBackground.svg'
import Clouds1 from '../Images/Clouds.svg'
import Clouds2 from '../Images/Clouds1.svg'

class WeatherApp extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      API: {
        loading: true,
        data: {
          temperature: null,
          conditions: null,
          city: null,
          town: null,
          icon: null,
        }

      }
    }
    this.getData = this.getData.bind(this)
  }

  async componentDidMount(){
    this.getData()
  }

  async getData(){
    if(document.getElementById("lat").textContent === ""){
      const result = await new WeatherAPI(51.5241,-0.0404).fetchLocationData()
      this.setState({
        API: {
          loading: false,
          data: {
            city: result.results[0].address_components[0].long_name,
            town: result.results[0].address_components[1].long_name
          }
        }
      })
    }
    else{
      const result = await new WeatherAPI(document.getElementById("lat").textContent,document.getElementById("lon").textContent).fetchLocationData()
      this.setState({
      API: {
        loading: false,
        data: {
          city: result.results[0].address_components[0].long_name,
          town: result.results[0].address_components[1].long_name
        }
      }
    })
    }
  }

  /*
  <div className="Background">
        <img src={Background}></img>
      </div>
  */
  
  render(){
    const path = this.state.API.data;
    return(
      <div className="ParentDiv">
        <div className="BackgroundContainer">
          <div className="Background">
            <img className="BackgroundImage" height={window.innerHeight} width={window.innerWidth} src={Background}></img>
        </div>
      </div>
      <div className="Main_Screen">
      <img className="Clouds1" src={Clouds1}></img>
      <img className="Clouds2" src={Clouds2}></img>
      <img className="Clouds3" src={Clouds1}></img>
      <img className="BackgroundSun" src={Sun}></img>
        <SearchBar></SearchBar>
        <HeaderBar city={path.city} town={path.town}></HeaderBar>
        <NavigationBar></NavigationBar>
        <WeatherPane></WeatherPane>
        <StatisticPane></StatisticPane>
        <ForecastPane click={this.getData}></ForecastPane>
        <hr></hr>
        <button onClick={this.getData}>Update Location</button>
      </div>
      </div>
    );
  }
}

export default WeatherApp;

/*

*/