import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring

    const inputTodo = screen.getByTestId('input-value');
    const addButton = screen.getByRole('button', { name: 'Adicionar' });

    listTodo.forEach((task) => {
      userEvent.type(inputTodo, task);
      userEvent.click(addButton);

      const addedTask = screen.getByText(task);
      expect(addedTask).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content="lucao" />);

    const lucao = screen.getByText('lucao');
    expect(lucao).toBeInTheDocument();
  });
});
