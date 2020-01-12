import React from 'react'
import WeatherForecast from './WeatherForecast'
import Form, { SearchField } from './styles/Form'
import Button from './styles/Button'

export default class WeatherSearchForm extends React.Component {

  state = {
    city: '',
    searchForecast: false
  }

  handleCityChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmitCity = (e) => {
    e.preventDefault()
    this.setState({
      searchForecast: true
    })
  }
  
  render() {
    return (
      <div>
        {/* search bar */}
        <Form onSubmit={this.handleSubmitCity}>
          <SearchField 
            type="text"
            name="city"
            placeholder="search by the name of the city"
            value={this.state.city}
            onChange={this.handleCityChange}
          />
          <Button onClick={this.handleSubmitCity}>search</Button>
        </Form>
        
        {/* display weather api */}
        {
          this.state.searchForecast ? 
          <WeatherForecast city={this.state.city} /> : null
        }
      </div>
    )
  }
}
