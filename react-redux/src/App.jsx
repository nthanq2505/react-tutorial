import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CounterContainer from "./components/CounterContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterContainer />
      </div>
    </Provider>
  );
}

export default App;
