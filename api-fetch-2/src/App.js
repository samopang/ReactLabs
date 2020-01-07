import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    person: null,
    loading: true
  }

  async componentDidMount() {
    const url = 'https://api.randomuser.me/'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({
      person: data.results[0],
      loading: false
    })
    // console.log(data) // for testing
  }

  render() {
    return (
      <div className="App">
        {
          this.state.loading || !this.state.person ? (
              <div>loading..</div> 
            ) : (
              <div>
                Name: {this.state.person.name.first} {this.state.person.name.last} <br />
                Email: {this.state.person.email}
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
