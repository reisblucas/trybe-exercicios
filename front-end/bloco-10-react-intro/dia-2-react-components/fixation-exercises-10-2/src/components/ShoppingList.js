import React, { Component } from "react";

class ShoppingList extends Component {
  render () {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    return shoppingList.map((item, index) => <li key ={ index }>{item}</li>);
  }
}

export default ShoppingList;