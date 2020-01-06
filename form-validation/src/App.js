import React, { Component } from 'react';
import './App.css';

const emailRegex = RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)

const formValid = errors => {
  let valid = true
  Object.values(errors).forEach(val => {
    val.length > 0 && (valid = false)
  })
  return valid
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    if (formValid(this.state.errors)) {
      console.log(`
        --submit--
        first name: ${this.state.firstName}
        last name: ${this.state.lastName}
        email: ${this.state.email}
        password: ${this.state.password}
      `)
    } else {
      console.log('form invalid - display error message')
      console.log(this.state.errors)
    }
  }

  handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    let errors = this.state.errors
    switch (name) {
      case 'firstName':
        errors.firstName = value.length < 3 ? 'minimum 3 characters required' : ''
        break
      case 'lastName':
        errors.lastName = value.length < 3 ? 'minimum 3 characters required' : ''
        break
      case 'email':
        errors.email = !emailRegex.test(value) ? 'invalid email address' : ''
        break
      case 'password':
        errors.password = value.length < 8 ? 'minimum 8 characters required' : ''
        break
      default: 
        break
    }
    // console.log(`${name} : ${value}`)
    // .setState({}) for prevState: readonly, props
    // this.setState({errors, [name]: value}, () => console.log(this.state)) // test
    this.setState({errors, [name]: value})
  }

  render() {
    const { errors } = this.state
    return (
      <div className="App">
        <div className="form-wrapper">
          <h1>create account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <input type="text" name="firstName" id="txt_fn" placeholder="Your First Name" 
              className={errors.firstName.length > 0 ? 'error' : null}
              onChange={this.handleChange} /><br />
            {errors.firstName.length > 0 && (<span className="danger">{errors.firstName}</span>)}

            <input type="text" name="lastName" id="txt_ln" placeholder="Your Last Name" 
              className={errors.lastName.length > 0 ? 'error' : null}
              onChange={this.handleChange} /><br />
            {errors.lastName.length > 0 && (<span className="danger">{errors.lastName}</span>)}

            <input type="email" name="email" id="txt_email" placeholder="Your Email" 
              className={errors.email.length > 0 ? 'error' : null}
              onChange={this.handleChange} /><br />
            {errors.email.length > 0 && (<span className="danger">{errors.email}</span>)}

            <input type="text" name="password" id="txt_pw" placeholder="Your Password" 
              className={errors.password.length > 0 ? 'error' : null}
              onChange={this.handleChange} /><br />
            {errors.password.length > 0 && (<span className="danger">{errors.password}</span>)}

            <input type="submit" value="Sign Up"/>
            <small>Already have an account?</small>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
