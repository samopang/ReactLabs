import React, { Component } from 'react';
import './App.css';

const url = 'https://jsonplaceholder.typicode.com/users'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      item: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          items: data
        })
      })
  }

  render() {
    
    const { isLoaded, items } = this.state

    if (!isLoaded) {
      return <div>Loading..</div>
    }

    return (
      <div className="App">
        <ul>
          { items.map(item => 
            <li key={item.id}>
              Name: {item.name} | email: {item.email}
            </li>
          ) }
        </ul>
      </div>
    );
  }
}

export default App;
