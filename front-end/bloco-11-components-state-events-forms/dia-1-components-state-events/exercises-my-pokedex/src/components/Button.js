import React from 'react';
import pokemons from './data';

class Button extends React.Component {
  render() {
    const { value, onClick, pokeType } = this.props;
    return (
      <button value={value} onClick={onClick}>{pokeType}</button>
    );
  }
}

export default Button;