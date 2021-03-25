import React from 'react';
import Styles from './SearchBar.module.css';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import SettingsButton from './Settings/SettingsButton';
// Allows users to search for a specific location.
class SearchBar extends React.Component{ 
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
  //handles the change of address location
  handleChange = address => {
    this.setState({ address });
  };
  //gets lat and lng location from the adress suplied
  handleSelect = address => {

      geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
          document.getElementById("latSearch").innerHTML = {lat}.lat
          document.getElementById("lonSearch").innerHTML = {lng}.lng
          this.props.onEnter()
      })
      .catch(error => console.error('Error', error));

  };
  // Structure of the search bar
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className={Styles.SearchBar}>
            <input
              {...getInputProps({
                placeholder: 'Search Location',
                className: 'location-search-input',
              })}
            />
            <SettingsButton></SettingsButton>
            <div>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

    );
  }
}

export default SearchBar;
