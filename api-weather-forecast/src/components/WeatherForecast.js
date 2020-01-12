import React from 'react'
import Axios from 'axios'
import '../assets/css/weather-icons.min.css'
import ListItemWrapper, { WeatherIcon } from './styles/ListItemWrapper'
require('dotenv').config()

export default class WeatherForecast extends React.Component {

  state = {
    weather: [],
    weekday: [
      'Sunday', 
      'Monday', 
      'Tuesday', 
      'Wednesday', 
      'Thursday', 
      'Friday', 
      'Saturday'
    ],
    isLoading: true
  }
  componentDidMount() {
    
    const url = 
      'https://api.openweathermap.org/data/2.5/forecast?q=' 
      + this.props.city 
      + '&units=metric&appid=' 
      + process.env.REACT_APP_KEY
    Axios.get(url)
      .then(res => {
        this.setState({
          weather: res.data.list,
          isLoading: false
        })
      })
      .catch(err => console.log(err.message)) 
  }
  
  render() {
    // console.log(this.state.weather)
    if (this.state.isLoading) {
      return <div>loading ...</div>
    }
    return (
      <div className="weather-container">
        {
          this.state.weather.map(data => (
            <ListItemWrapper key={data.dt} space="20px">
              {/* weekday */}
              <div>
                {
                  this.state.weekday[new Date(data.dt_txt).getDay()]
                }
              </div>
              <div>Date: {data.dt_txt}</div>

              {/* weather icon */}
              <div>
                {
                  (data.weather[0].main === 'Clouds') ? (
                    <WeatherIcon className="wi wi-cloudy"></WeatherIcon>
                  ) : (
                    <WeatherIcon className={'wi wi-' + data.weather[0].main.toLowerCase()}></WeatherIcon>
                  )
                }
              </div>
              <div>{data.weather[0].main}</div>

              {/* temperature degree */}
              <div>Temperature: {Math.round(data.main.temp)} &#8451;</div>
            </ListItemWrapper>
          ))
        }
      </div>
    )
  }
}
