import React from 'react'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'

export default class SearchForm extends React.Component {

  state = {
    search: '',
    city: '',
    postalCode: '',
    // geographic coordinates
    geoLat: '', // latitude: float
    geoLon: '', // longitude: float
    currentWeather: false,
    forecastWeather: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleWeather = (e) => {
    if (e.target.dataset.weather === 'currentWeather') {
      this.setState({
        forecastWeather: false
      })
    } else {
      this.setState({
        currentWeather: false
      })
    }
    this.setState({
      [e.target.dataset.weather]: true
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <div onChange={this.handleChange}>
          <input type="radio" name="search" value="city" /> city <br />
          <input type="radio" name="search" value="postalCode" /> postal code <br />
          <input type="radio" name="search" value="geo" /> geographic coordinates <br />
        </div>

        {/* by city or postalCode */}
        {
          this.state.search === 'city' || this.state.search === 'postalCode' ? (
            <input 
              type="text" 
              name={this.state.search} 
              placeholder={'search by ' + this.state.search} 
              value={this.state.search === 'city' ? this.state.city : this.state.postalCode}
              onChange={this.handleChange}
            />
          ) : null
        }

        {/* by geo lat and lon */}
        {
          this.state.search === 'geo' ? (
            <div onChange={this.handleChange}>
              <input 
                type="text" 
                name='geoLat' 
                placeholder='latitude' 
                value={this.state.geoLat} 
              />
              <input
                type="text" 
                name='geoLon' 
                placeholder='longitude' 
                value={this.state.geoLon}
              />
            </div>
          ) : null
        }

        {
          this.state.search ? (
            <div>
              <button data-weather="currentWeather" onClick={this.handleWeather}>Current</button>
              <button data-weather="forecastWeather" onClick={this.handleWeather}>Forecast</button>
            </div>
          ) : null
        }

        {this.state.currentWeather ? (
          <CurrentWeather request={this.state} />
        ) : null}
        {this.state.forecastWeather ? (
          <ForecastWeather request={this.state} />
        ) : null}
      </div>
    )
  }
}
