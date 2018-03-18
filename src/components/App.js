import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Details from './Details';
import '../App.css';
import { Route, Switch } from 'react-router-dom';

import pokedex from './../images/Pokedex_logo.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      pokemons: [],
      inputPoke: ''
    }
  }

  componentDidMount () {
    for (var i = 1; i < 26; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          pokemons: this.state.pokemons.concat([json])
        })
      });
  }
};

handleSearch(e) {
  const valueInput = e.target.value.toLowerCase();

  this.setState({
    inputPoke: valueInput
  })
}

paintPokemon(){
  let listPokemon = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase()
  .includes(this.state.inputPoke));

  return(
    <ul className="pokemon__list">

      {listPokemon.sort(function(a,b){
      return a.id - b.id;}).map(
        (pokemon) =>
          <li key = {pokemon.id}>
            <Pokemon
              id = {pokemon.id}
              name = {pokemon.name}
              types = {pokemon.types.sort((typeNumber) => typeNumber.slot).map((typeNumber) => typeNumber.type.name)}
              image={pokemon.sprites.front_default}
              evolution = {pokemon.species}/>
          </li>
      )
      }
    </ul>
  )
}
  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={pokedex} className="header__logo" alt="logo" />
        </header>
        <main className="main">
          <div>
            <h2 className="main__text">Search your favorite Pokemon in our PokeDex</h2>
            <input className="main__filter" placeholder="Search the Pokemon" value={this.state.valueInput} onChange={this.state.handleSearch}></input>
            {this.paintPokemon()}
          </div>
          <Switch>
            {/* <Route exact path='/' component={ Home } /> */}
            <Route path='/{this.state.}' component={ Details } />
          </Switch>
          </main>

        </div>
    );
  }
}

export default App;
