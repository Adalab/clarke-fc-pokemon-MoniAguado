import React, { Component } from 'react';
import '../App.css';

import pokedex from './../images/Pokedex_logo.png';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={pokedex} className="header__logo" alt="logo" />
          <h1 className="header__title">Welcome to PokeDex</h1>
        </header>
        <main className="main">
          <div>
            <h2 className="main__text">Search your favorite Pokemon in our pokeDex</h2>
            <input className="main__filter" placeholder="Search the Pokemon"></input>
          </div>
          </main>

        </div>
    );
  }
}

export default App;
