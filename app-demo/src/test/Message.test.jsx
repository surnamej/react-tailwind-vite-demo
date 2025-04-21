import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Message from '../features/Message.jsx';

test('renders the initial message', () => {
  render(<Message />);
  const messageElement = screen.getByTestId('message');
  expect(messageElement).toHaveTextContent("Hello, world!");
});

test('changes message when button is clicked', async () => {
  render(<Message />);
  const button = screen.getByText("Click Me");
  await userEvent.click(button);
  expect(screen.getByTestId("message")).toHaveTextContent("You clicked me!");
});
