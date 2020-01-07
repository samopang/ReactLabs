import React, { Component } from 'react';
import './App.css';

/**
 * new Header Component
 * with render() function
 */
class Header extends Component {
  render() {
    return (
        <div className="header">
          <h2>in Header Component</h2>

          {/* pass data through 'props' by JS variable 'title' */}
          The passing string data is {this.props.title}

          <br />
          The passing number data is {this.props.num}

          <br />
          The first element of the passing array is {this.props.myArr[0]}

          <br />
          The passing object is {JSON.stringify(this.props.myObj)}

          <br />
          The passing function with two params 10 and 12 that returns {this.props.myFunc1(10, 12)}
          <br />
          The passing function with two params 22 and 12 that returns {this.props.myFunc2(22, 12)}
          <br />
          The passing function with two params 2 and 3 that returns {this.props.myFunc3(2, 3)}
        </div>
    );
  }
}

/**
 * functional component
 * pass data by 'props' need to pass in as a param without 'this' keyword
 */
const Body = (props) => (
  <div className="body">
    <h2>in Body Functional Component</h2>
    {props.text}
  </div>
);

/**
 * Root Component
 * with render() function
 */
class App extends Component {

  // define a function in class (more handy)
  multiplication(a,b) {
    return a * b;
  }

  render() {

    // define function after render()
    const sum = (a, b) => a + b;

    return (
      <div className="App">
        Hello World

        {/* pass data to component 
            except 'string' needs curly-braces
        */}
        <Header 
          title="Hello from App" 
          num={5} 
          myArr={[1, 2, 3]}
          myObj={{
            a: 1, 
            b: 2
          }}
          myFunc1={sum} 
          myFunc2={(a, b) => a - b}
          myFunc3={this.multiplication}
          />
        
        <Body text="Data from App" />

        <div className="footer">here is footer</div>
      </div>
    );
  }
}

export default App;
