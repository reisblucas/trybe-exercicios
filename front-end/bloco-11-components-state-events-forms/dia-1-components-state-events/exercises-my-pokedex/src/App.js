import './App.css';
import React, { Component } from 'react';
import pokemons from'./components/data';
import CardPokemon from './components/CardPokemon'

class App extends Component {
  render () {
    return (
      <main>
        <header>
          <h1>Pokedex</h1>
        </header>

        <section className='Pokedex'>
          {
            pokemons.map((pokemon) => <CardPokemon key={ pokemon.id } pokemons={pokemon}/>)
          }
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
