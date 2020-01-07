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
    const buttonText = this.state.visible ? 'hide' : 'show'
    const slider = this.state.visible ? <ImageSlider /> : <Counter initialCount={0} />
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
