import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import ImageSlider from './components/ImageSlider';

class App extends Component {

  state = {
    visible: true,
    componentToShow: 'counter'
  }

  handleToggleBtn = () => {
    this.setState({
      visible: !this.state.visible
    })
  }
  showCounter = () => {
    this.setState({
      componentToShow: 'counter'
    })
  }
  showSlider = () => {
    this.setState({
      componentToShow: 'slider'
    })
  }

  render() {
    let content = 'choose what to show here'
    const buttonText = this.state.visible ? 'hide' : 'show'

    if (this.state.componentToShow === 'slider') {
      content = 
        <div>
          <ImageSlider />
          <button onClick={this.showCounter}>show counter</button>
        </div>
    }

    if (this.state.componentToShow === 'counter') {
      content = 
        <div>
          <Counter initialCount={0} />
          <button onClick={this.showSlider}>show slider</button>
        </div>
    }
    
    if (!this.state.visible) {
      content = 'hide everything'
    }

    return (
      <div className="App">

        {/* hidden component to avoid unmounting it */}
        <div className={this.state.visible ? 'visible' : 'hidden'}>
          <Counter />
        </div>

        <button onClick={this.handleToggleBtn}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
