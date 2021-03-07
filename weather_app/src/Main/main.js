import React from 'react';
import ReactDOM from 'react-dom';
import HeaderLocale from "./locale_header.js"

class Main extends React.Component{

    render(){
        return(
            <div className="Main">
                <HeaderLocale></HeaderLocale>
                <nav className="WeatherTimeScale">There</nav>
                <body className="WeatherBody">How</body>
                <footer className="HourlyForecast">Are</footer>
            </div>
        );
    }

}

export default Main
