import React from 'react'

const initialState = {
  url: process.env.REACT_APP_URL,
  isLoading: true,
  weather: null,
  icon: null
}

export default class CurrentWeather extends React.Component {

  state = initialState

  async componentDidMount() {
    let api = ''
    switch (this.props.request.search) {
      case 'city':
        api = this.state.url + 'q=' + this.props.request.city
        break
      case 'postalCode':
        api = this.state.url + 'zip=' + this.props.request.postalCode
        alert(this.props.request.postalCode)
        break
      case 'geo':
        api = this.state.url + 'lat=' + this.props.request.geoLat + '&lon=' + this.props.request.geoLon
        break
      default:
        break
    }
    if (api) {
      const res = await fetch(api + '&appid=' + process.env.REACT_APP_KEY)
      const data = await res.json()
      this.setState({
        api: data,
        icon: process.env.REACT_APP_IMG + data.weather[0].icon + '.png',
        isLoading: false
      })
      // console.log(data)
    }
  }

  render() {
    return (
      <div>
        {
          this.state.isLoading ? (
            <div>current weather loading...</div>
          ) : null
        }
        {
          this.state.data ? (
            <div>
              <div>coordinates: lat {this.state.api.coord.lat}, lon {this.state.api.coord.lon}</div>
              <img src={this.state.icon} alt={this.state.api.weather[0].description}/>
              <div>weather: {this.state.api.weather[0].description}</div>
              <div>
                temperature: {this.state.api.main.temp}<br />
                <small>Maximum: {this.state.api.main.temp_max}</small><br />
                <small>Minimum: {this.state.api.main.temp_min}</small><br />
                feels like: {this.state.api.main.feels_like}
              </div>
              <div>wind: speed {this.state.api.wind.speed}</div>
            </div>
          ) : (
            <div>data not found</div>
          )
        }
      </div>
    )
  }
}
