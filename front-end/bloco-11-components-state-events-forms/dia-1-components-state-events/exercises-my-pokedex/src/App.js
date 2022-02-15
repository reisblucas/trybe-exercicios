import './App.css';
import React, { Component } from 'react';
import pokemons from'./components/data';
import CardPokemon from './components/CardPokemon'
import Button from './components/Button';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemonType: 'All',
      pokemonIndex: 0,
      buttonType: [],
    }

    this.filterPokemonType = this.filterPokemonType.bind(this);
    this.nextPokemon = this.nextPokemon.bind(this);
    this.prevPokemon = this.prevPokemon.bind(this);
  }

  filterPokemonType(event) {
    this.setState({
      pokemonType: event.target.innerText,
    })
  }

  nextPokemon() {
    this.setState((prevState, _props) => ({
      pokemonIndex: prevState.pokemonIndex + 1,
    }))
  }

  prevPokemon() {

  }

  render () {
    return (
      <main>
        <header>
          <h1>Pokedex</h1>
        </header>

        <section>
          <section className='sectionButtons'>
            <span>Type:</span>
            {
              pokemons.map((pokemon) => {
                if (!this.state.buttonType.includes(pokemon.type)) {
                  this.state.buttonType.push(pokemon.type)
                  console.log(this.state.buttonType)
                  return <Button 
                    key={pokemon.id}
                    value={this.state.pokemonType}
                    onClick={this.filterPokemonType}
                    pokeType={pokemon.type}
                  />
                }
                // return this.state.buttonType;
              })
            }
            <button value={this.state.pokemonType} onClick={this.filterPokemonType}>All</button>

          </section>
          <div>
            <button value={this.state.pokemonIndex} onClick={this.nextPokemon}>Next Pokemon</button>
          </div>
          <section className='Pokedex'>
            {
              pokemons.filter((pokemon) => {
                if (this.state.pokemonType === 'All') { return pokemon.type }
                return pokemon.type === this.state.pokemonType;
              })
                .map((pokemon) => <CardPokemon key={ pokemon.id } pokemons={pokemon}/>)
            }
          </section>
        </section>

        <footer>
          <p>
            Conteúdo compilado por Lucas Barbosa dos Reis, enquanto aluno da Trybe, para atividade sobre HTML Semântico.
          </p>
          <p>
            24 de Janeiro de 2022
          </p>
        </footer>
      </main>
    );
  }
}

export default App;
