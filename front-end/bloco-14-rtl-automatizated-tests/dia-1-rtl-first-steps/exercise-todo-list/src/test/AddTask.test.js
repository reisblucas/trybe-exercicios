import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('test 1', () => {
  test('should verify if button add tasks', () => {
    render(<App />);

    const addButton = screen.getByRole('button', { name: 'Adicionar' });
    expect(addButton).toBeInTheDocument();
  });

  test('value task e add task', () => {
    render(<App />);

    const TASK = 'direito';

    const inputTodo = screen.getByTestId('input-value');
    const addButton = screen.getByRole('button', { name: 'Adicionar' });

    // expect(inputTodo.type).toBe('text');
    // expect(inputTodo).toBeInTheDocument();
    expect(inputTodo.value).toBe('');

    userEvent.type(inputTodo, TASK);
    expect(inputTodo.value).toBe(TASK);

    userEvent.click(addButton);
    const addedTask = screen.getByText(TASK);
    expect(addedTask);
  });
});
