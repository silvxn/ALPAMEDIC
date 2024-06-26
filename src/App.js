import React from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Grid from './components/Grid';

function App() {
  return (
      <div className="App">
        <Header />
        <Filter />
        <Grid />
      </div>
  );
}

export default App;
