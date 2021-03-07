import React from 'react';
import ReactDOM from 'react-dom';

class HeaderLocale extends React.Component{

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }


    render(){
        return(
            <header className="LocaleInfo">
                <div>
                    <p>It is {this.state.date.toLocaleDateString()} and the time is {
                    this.state.date.getHours()}</p>
                    <p>Location</p>
                    <p>Specific Locations</p>
                    <p>Hellos</p>
                </div>
            </header>
        );
    }
}

export default HeaderLocale;
