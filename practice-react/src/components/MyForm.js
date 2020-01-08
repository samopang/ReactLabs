import React from 'react'

export default class MyForm extends React.Component {

  state = {
    name: 'Pam',
    favoritePet: 'Kuro',
    rememberMe: false,
    title: 'Mr.'
  }

  handleChange = (e, fieldName, isCheckbox) => {
    this.setState({
      // change the value of the name not the name of property itself
      [fieldName]: // condition: either checkbox or not
        isCheckbox ? // default 'null' as false
        e.target.checked : e.target.value
    })
  }
  handleSubmit = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          onChange={ (e) => this.handleChange(e, 'name') } 
          value={this.state.name}
        /><br />

        <textarea 
          type="text" 
          onChange={ (e) => this.handleChange(e, 'favoritePet') } 
          value={this.state.favoritePet}
        /><br />

        <input 
          type="checkbox"
          checked={this.state.rememberMe} 
          onChange={ (e) => this.handleChange(e, 'rememberMe', true) }
        /><br />

        <div>
          <select 
            value={this.state.title}
            onChange={ (e) => this.handleChange(e, 'title') }
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
