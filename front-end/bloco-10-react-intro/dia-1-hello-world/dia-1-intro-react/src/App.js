import React from 'react';
import { render } from 'react-dom';
import Greeting from './Greeting';

// const Task = (...values) => {
//   return (
//     values.forEach((value) => {
//     <li>{value}</li>
//     })
//   );
// }

// const lucao = Task('acordar', 'levantar-se', 'escovar os dentes', 'lavar o rosto', 'tomar café da manhã');

class Task extends React.Component {
  render() {
    return (
      <ul>
        <li>
          Hello. {this.props.value}
        </li>
      </ul>
    );
  }
} 

function App() {
  return (
    <main>
      <Greeting name="Lucas" lastName="Barbosa dos Reis" />
    </main>
  );
}

function greeting(name){
  return `Hello, ${name}`;
}
console.log(greeting('Samuel'));

export default App;
