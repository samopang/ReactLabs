import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
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
    let slider = this.state.visible ? <ImageSlider /> : <Counter initialCount={0} />
    // if we need to totally change something (put on the top of the render function)
    if (!this.state.visible) { // after executed it others won't be ran
      slider = <div>display nothing</div>
    }
    const buttonText = this.state.visible ? 'hide' : 'show'
    return (
      <div className="App">
        { slider }
        <button onClick={this.handleToggleImage}>
          { buttonText }
        </button>
      </div>
    );
  }
}

export default App;
