import React from 'react'

const initialState = {
  name: '',
  email: '',
  password: '',
  nameError: '',
  emailError: '',
  passwordError: ''
}

export default class ValidationForm extends React.Component {

  state = initialState

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate()
    if (isValid) {
      console.log(this.state)
      // clear form after valid submit
      this.setState(initialState)
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    this.validate()
  }
  validate = () => {
    let nameError = ''
    let emailError = ''
    let passwordError = ''

    // for name field
    !this.state.name ? 
      nameError = 'name cannot be blank': nameError = ''
    this.state.name.length < 3 ? 
      nameError = 'name is required at least 3 characters' : nameError = ''
       
    // for email field
    !this.state.email.includes('@') ? 
      emailError = 'invalid email' : emailError = ''
      
    // for password field
    !this.state.password || this.state.password.length < 8 ?
      passwordError = 'password is required at least 8 characters' : passwordError = ''
      
    // for all fields
    if (nameError || emailError || passwordError) {
      this.setState({nameError, emailError, passwordError})
      return false
    }
    return true
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input 
            type="text" 
            name="name"
            value={this.state.name}
            placeholder="username"
            onChange={this.handleChange}
          /><br />
          <small className="danger">{this.state.nameError}</small>
        </div>
        <div>
          <input 
            type="email" 
            name="email"
            value={this.state.email}
            placeholder="email address"
            onChange={this.handleChange}
          /><br />
          <small className="danger">{this.state.emailError}</small>
        </div>
        <div>
          <input 
            type="password" 
            name="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.handleChange}
          /><br />
          <small className="danger">{this.state.passwordError}</small>
        </div>
        <button type="submit">submit</button>
      </form>
    )
  }
}
