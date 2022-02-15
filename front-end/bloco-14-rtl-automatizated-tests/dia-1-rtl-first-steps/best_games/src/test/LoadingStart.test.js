import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';


describe('Test', () => {
  test('Loading', async () => {
    render(<App />);
    const loading = await screen.findByText(/carregando.../i);

    expect(loading).toBeInTheDocument();
  })

  test('Minecraft h3', async () => {
    render(<App/>);
  
    const minecraft = await screen.findByText('Minecraft');
    // await waitFor(() => expect(screen.getByText('Minecraft')).toBeInTheDocument() );

    expect(minecraft).toBeInTheDocument();
  });

  test('Ver detalhes link', async () => {
    render(<App />);

    const detailLink = await screen.findAllByRole('link');

    userEvent.click(detailLink[1]);

    const sales = await screen.findByText(/sales/i);
    const releaseYear = await screen.findByText(/release/i);

    // expect(releaseYear).toBeInTheDocument();
    await waitFor(() => expect(sales).toBeInTheDocument());
    await waitFor(() => expect(releaseYear).toBeInTheDocument());

  })
});
