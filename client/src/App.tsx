import React from 'react';
import './App.css';
import {Router} from "./app/router";
import {Header} from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
