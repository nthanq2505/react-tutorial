import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../features/counter/counterSlice";

function ComponentB() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Component B</h1>
      <button onClick={() => dispatch(increment())}>Click me B</button>
    </div>
  );
}

export default ComponentB;
