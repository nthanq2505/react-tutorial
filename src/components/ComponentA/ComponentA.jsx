import React from "react";
import { createContext, useContext, useState } from "react";
import ComponentB from "../ComponentB/ComponentB";

export const counterContext = createContext(null);

function ComponentA() {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState(state + 1);
  };

  return (
    <counterContext.Provider value={{ state, setState }}>
      <div className="componentA">
        <h1>Component A</h1>
        <h2>{state}</h2>
        <ComponentB />
        <button onClick={handleClick}>Click me A </button>
      </div>
    </counterContext.Provider>
  );
}

export default ComponentA;
