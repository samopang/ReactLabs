import React, { Component } from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';

class App extends Component {

  state = {
    visible: true
  }

  handleToggleImage = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    const buttonText = this.state.visible ? 'hide' : 'show'
    return (
      <div className="App">
        {/* conditionally render a component */}
        {this.state.visible ? <ImageSlider /> : <div>image is hidden</div>}
        <button onClick={this.handleToggleImage}>
          { buttonText }
        </button>
      </div>
    );
  }
}

export default App;
