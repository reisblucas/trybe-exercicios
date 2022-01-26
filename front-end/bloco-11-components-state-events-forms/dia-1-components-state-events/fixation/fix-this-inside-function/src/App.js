import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      countClick: 0,
    }
  }

  handleClick() {
    this.setState((previousState, _props) => ({
      countClick: previousState.countClick + 1,
    }))
  }

  render() {
    /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
    através da sintaxe `this.minhaFuncao` para usá-la num evento */
    return <button type="button" onClick={this.handleClick}>{this.state.countClick}</button>;
  }
}

export default App;


/*  retorno do this na Classe App
  App {
    context: {}
    props: {}
    refs: {}
    state: null
    updater: { isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ }
    _reactInternalFiber: FiberNode { tag: 1, key: null, stateNode: App, elementType: ƒ, type: ƒ, …}
    _reactInternalInstance: {_processChildContext: ƒ}
    isMounted: (...)
    replaceState: (...)
    __proto__: Component
      constructor: class App
      isMounted: (...)
      render: ƒ render()
      replaceState: (...)
      __proto__: {...}
    // ... Continua
    }
*/