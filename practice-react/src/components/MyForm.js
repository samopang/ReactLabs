import React from 'react'

export default class MyForm extends React.Component {

  state = {
    name: 'Pam',
    favoritePet: 'Kuro',
    rememberMe: false,
    title: 'Mr.'
  }

  handleChange = (e) => {
    // console.log('changed') // test
    // console.log(e.target.value)
    this.setState({
      name: e.target.value
    })
  }
  handleChangeFavoritePet = (e) => {
    this.setState({
      favoritePet: e.target.value
    })
  }
  handleCheck= (e) => {
    this.setState({
      rememberMe: e.target.checked
    })
  }
  handleSelect = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  handleSubmit = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        {/* uncontrol field */}
        {/* <input type="text"/> */}
        
        <input 
          type="text" 
          onChange={this.handleChange} 
          value={this.state.name}
        /><br />

        <textarea 
          type="text" 
          onChange={this.handleChangeFavoritePet} 
          value={this.state.favoritePet}
        /><br />

        <input 
          type="checkbox"
          checked={this.state.rememberMe} 
          onChange={this.handleCheck}
        /><br />

        <div>
          <select 
            value={this.state.title}
            onChange={this.handleSelect}
          >
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>

        <button onClick={this.handleSubmit}>submit</button>
      </div>
    )
  }
}
