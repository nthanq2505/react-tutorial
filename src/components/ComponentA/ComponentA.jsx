import React from "react";
import ComponentB from "../ComponentB/ComponentB";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../features/counter/counterSlice";

function ComponentA() {
  const state = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Component A</h1>
      <h2>{state}</h2>
      <ComponentB />
      <button onClick={() => dispatch(increment())}>Click me A </button>
    </div>
  );
}

export default ComponentA;
