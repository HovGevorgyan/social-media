import React from 'react';
import './App.css';
import Users from "./components/Users";
import Products from "./components/Products";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="App">
      <Users/>
      <Products/>
      <Posts/>
    </div>
  );
};

export default App;
