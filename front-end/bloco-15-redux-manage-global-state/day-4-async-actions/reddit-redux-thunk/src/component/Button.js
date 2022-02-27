import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class Button extends Component {
  capitalize = (str) => {
    const firstPos = str[0].toUpperCase();
    const restStr = str.split('').slice(1).join('');
    return `${firstPos}${restStr}`
  }
  
  render() {
    const {value} = this.props;

    return (
      <button {...this.props}> {this.capitalize(value)} </button>
    )
  }
}

Button.propTypes = {
  value: PropTypes.str,
}.isRequired
