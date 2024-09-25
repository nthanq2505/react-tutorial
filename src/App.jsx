import React from "react";
import MyButton from './components/MyButton/MyButton';
import Profile from "./components/Profile/Profile";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import ComponentA from "./components/ComponentA/ComponentA";

export default function MyApp() {
    const isLogged = true;
  return (
    <div>
      <h1>Welcome to my app!</h1>
      {/* <MyButton /> */}
      {/* <Profile /> */}
      {/* {isLogged ? <Profile /> : <h1>You need to log in</h1>} */}
      {/* <ShoppingList /> */}
      <ComponentA />
    </div>
  );
}
