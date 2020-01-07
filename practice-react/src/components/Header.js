import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div className="header">

        <h2>in Header Component</h2>

        hello from header
          
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
    )
  }
}

export default Header
