import CloudySunny from '../../../Images/CloudySunny.svg'
import CloudyNight from '../../../Images/CloudyNight.svg'
import Night from '../../../Images/Night.svg'
import Rain from '../../../Images/Rain.svg'
import Sunny from '../../../Images/Sunny.svg'
import ThunderStorm from '../../../Images/ThunderStorm.svg'

class WeatherIcon{

    constructor(weatherCondition){
        let weather = {
            CLOUDYSUNNY: {
                Value: 0,
                Icon: CloudySunny,
                Message: "Partly Cloudy",
                Code: [801,802]
            },
            SUNNY: {
                Value: 1,
                Icon: Sunny,
                Message: "Sunny",
                Code: [800]
            },
            RAIN: {
                Value: 2,
                Icon: Rain,
                Message: "Rainy",
                Code: [500,501,502,503,504,511,520,521,522,531]
            },
            THUNDERSTORM: {
                Value: 3,
                Icon: ThunderStorm,
                Message: "Thunderstorm",
                Code: [200,201,202,210,211,212,221,230,231,232]
            },
            NIGHT: {
                Value: 4,
                Icon: Night,
                Message: "Night",
                Code: [100,101]
                
            },
            CLOUDYNIGHT: {
                Value: 5,
                Icon: CloudyNight,
                Message: "Cloudy Night",
                Code: [803,804]
            }
        }
        this.img = null;
        this.msg = null;
        for (let property in weather) {
            if (weather[property].Code.includes(weatherCondition)){
                console.log(1)
                this.img = weather[property].Icon
                this.msg = weather[property].Message
            }
        }
    }


    getWeatherIcon(){
        return this.img
    }

    getWeatherMessage(){
        return this.msg
    }

    getWeatherCode(){
        return this.code
    }
}

export default WeatherIcon