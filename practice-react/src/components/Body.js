import React from 'react'

// can be name anything (by default keyword)
export default (props) => (
  <div className="body">
    <h2>in Body Functional Component</h2>
    {props.text}
  </div>
)

// export multiple functional components
// ONLY can be imported by the function name
export const Body2 = () => (
  <div className="body2">
    <h2>in Body 2 Component</h2>
    here is body 2
  </div>
)