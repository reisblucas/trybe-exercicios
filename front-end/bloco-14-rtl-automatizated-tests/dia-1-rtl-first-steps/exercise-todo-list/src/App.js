import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodo: [],
      selectedTodo: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTodo(todo) {
    this.setState((prevState) => {
      const includes = prevState.selectedTodo.includes(todo);
      if (!includes) {
        return ({ selectedTodo: [...prevState.selectedTodo, todo] });
      }
      return !includes;
    });
  }

  removeTodo(todo) {
    const { listTodo } = this.state;
    const itemsLeft = listTodo.filter((task) => task !== todo);
    this.setState({ listTodo: itemsLeft });
  }

  render() {
    const { listTodo, selectedTodo } = this.state;

    return (
      <div className="App">
        <InputTodo addTodo={ (todo) => this.addTodo(todo) } />
        {
          listTodo
          && (
            <ul>
              {
                listTodo.map((todo, index) => (
                  <li key={ index + 1 }>
                    <Item content={ todo } selectCallBack={ this.selectTodo } />
                    <input
                      type="button"
                      value="Remover"
                      onClick={ () => this.removeTodo(todo) }
                      data-testid="id-remove"
                      disabled={ !selectedTodo.includes(todo) }
                    />
                  </li>
                ))
              }
            </ul>
          )
        }
      </div>
    );
  }
}

export default App;
