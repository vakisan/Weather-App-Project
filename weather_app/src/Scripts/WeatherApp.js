import '../Styles/WeatherApp.css';
import SearchBar from './Components/SearchBar/SearchBar.js'
import HeaderBar from './Components/HeaderBar/HeaderBar.js'
import NavigationBar from './Components/NavigationBar/NavigationBar.js'
import WeatherPane from './Components/WeatherPane/WeatherPane.js'
import StatisticPane from './Components/StatisticPane/StatisticPane.js'
import ForecastPane from './Components/ForecastPane/ForecastPane.js'

function WeatherApp() {
  return (
    <div className="Main_Screen">
      <SearchBar></SearchBar>
      <HeaderBar></HeaderBar>
      <NavigationBar></NavigationBar>
      <WeatherPane></WeatherPane>
      <StatisticPane></StatisticPane>
      <ForecastPane></ForecastPane>
      <hr></hr>
    </div>
  );
}

export default WeatherApp;
