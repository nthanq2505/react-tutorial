import React from "react";
import { useState } from "react";
import ComponentB from "../ComponentB/ComponentB";

function ComponentA() {
  const [state, setState] = useState(0);
  const handleClick = () => {
    setState((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>State: {state}</h1>
      <ComponentB handleClick={handleClick} />
      <button onClick={handleClick}>Click meA</button>
    </div>
  );
}

export default ComponentA;
