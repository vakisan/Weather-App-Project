class WeatherAPI{
    
    constructor(lat,lon){
        this.url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=1d2bf4ccc473c4fafed06f2a893c25ea";
        this.locationURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyBNGQ3fTb3u8K1xA6MO1EUzszkc16ms0KI`
        this.url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=601589d179731d2db6f28fb71175a80c`
        this.hourly = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=601589d179731d2db6f28fb71175a80c`
    }

    async fetchLocationWeatherData(){
      const response = fetch(this.url1)
      const result = (await response).json()
      return result
    }
    async fetchLocationData(){
      const response = fetch(this.locationURL)
      const result = (await response).json()
      return result
    }
    async fetchHourlyData(){
      const response = fetch(this.hourly)
      const result = (await response).json()
      return result
    }

}

export default WeatherAPI;