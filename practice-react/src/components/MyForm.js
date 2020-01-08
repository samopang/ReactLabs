import React from 'react'

export default class MyForm extends React.Component {

  state = {
    name: 'Pam',
    favoritePet: 'Kuro',
    rememberMe: false,
    title: 'Mr.'
  }

  handleChange = (e) => {
    // console.log(e.target.name) // fetch field's name value

    // optimize checkbox condition from param to here
    const isCheckbox = e.target.type === 'checkbox'

    this.setState({
      // change the value of the name not the name of property itself
      [e.target.name]: // condition: either checkbox or not
        isCheckbox ? // default 'null' as false
        e.target.checked : e.target.value
    })
  }
  handleSubmit = (e) => {
    // to prevent putting data on url and refresh the page
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      // form submit always refreshing the page
      // put data on url
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="name"
          onChange={this.handleChange} 
          value={this.state.name}
        /><br />

        <textarea 
          type="text" 
          name="favoritePet"
          onChange={this.handleChange} 
          value={this.state.favoritePet}
        /><br />

        <input 
          type="checkbox"
          name="rememberMe"
          checked={this.state.rememberMe} 
          onChange={this.handleChange}
        /><br />

        <div>
          <select 
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          >
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>

        <button type="submit">submit</button>
      </form>
    )
  }
}
