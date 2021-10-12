import './App.css';
import React from 'react';
import Header from './Header';
import Body from './Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scorecard from './Scorecard';

function App() {
  return (
    <div className="App">
      
      <Scorecard />
      <Body />
     
    </div>
  );
}

export default App;
