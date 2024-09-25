import React from 'react'

function ComponentB(props) {
    const {handleClick} = props
  return (
    <div>
        <h1>Component B</h1>
        <button onClick={() => handleClick()}>Click meB</button>
    </div>
  )
}

export default ComponentB