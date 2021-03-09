class WeatherAPI{
    
    constructor(){
        this.url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=1d2bf4ccc473c4fafed06f2a893c25ea";
    }

    async fetchData(){
      const response = fetch(this.url)
      const result = (await response).json()
      return result
    }
}

export default WeatherAPI;