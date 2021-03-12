import React from 'react';
import Styles from './ForecastPane.module.css';
import WeatherAPI from '../WeatherPane/WeatherAPI'
import KelvinToCelcius from '../WeatherPane/KelvinToCelcius.js'
import Thermometer from '../../../Images/Thermometer.svg'
import Drop from '../../../Images/Drop.svg'
import WeatherMiniIcon from './WeatherMiniIcon.js'

class HourlyForecast extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            icon: null
        }
    }

    async componentDidMount(){
        let result = await new WeatherAPI(51.5241,-0.0404)
        .fetchHourlyData()
        .then(res => {return res})

        console.log(result)
        for (let i = 1; i<25; i++){
            let e = document.getElementsByClassName(Styles.HourColumn+""+i)
            e[0].parentNode.childNodes[2].childNodes[0].src = this.getIconMini(result.hourly[i].weather[0].id, e[0].parentNode.childNodes[0].textContent.substring(0,2))
            e[0].parentNode.childNodes[3].append(Math.round(KelvinToCelcius(result.hourly[i].temp)) + "°C")
            e[0].parentNode.childNodes[4].append(result.hourly[i].humidity + "%")
        }
      }

    getIconMini(condition,hour){
        return new WeatherMiniIcon(condition,hour).getWeatherIcon()
    }
    
      

    render(){
        let hour = new Date().getHours()
        let elementArray = [];
        let over24 = 0;
        for(let i = 1; i<25; i++){
            let formatter;
            if (i+hour<24){
                if (i+hour<10){
                    formatter = "0" + (i+hour)+ ':00'
                }
                else{
                    formatter = (i+hour) + ':00'
                }
            }
            else{
                if (over24<10){
                    formatter = "0" + over24+ ':00'
                }
                else{
                    formatter = over24+ ':00'
                }
                over24 += 1
            }
            elementArray.push(
                <div>
                <p className={Styles.HourColumn+""+i} key={i} style={
                  {
                    gridColumn:i,
                    width: 300
                  }
              }>
                {formatter}
                </p>
                <hr className={Styles.Line}/>
                <p><img /></p>
                <p><img src={Thermometer}/></p>
                <p><img className={Styles.Drop} src={Drop}/></p>
                </div>
            );
          }
        return (
            elementArray
          );
    }
}

export default HourlyForecast;
