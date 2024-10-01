import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../ComponentA/ComponentA'

function ComponentB() {
  const { state, setState } = useContext(counterContext);

  function handleClick() {
    setState(state + 1);
  }
  
  return (
    <div className='componentB'>
        <h1>Component B</h1>
        <button onClick={() => handleClick()}>Click me B</button>
    </div>
  )
}

export default ComponentB