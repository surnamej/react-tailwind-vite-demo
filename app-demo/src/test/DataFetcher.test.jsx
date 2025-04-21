/*
import { fetchData } from '../api.js';

beforeEach(() => {
  fetch.resetMocks();
});

test('returns result if array', async () => {
  fetch.mockResponseOnce(JSON.stringify(['data1', 'data2']));

  const result = await fetchData();
  expect(result).toEqual(['data1', 'data2']);
});
*/

// src/test/DataFetcher.test.jsx
import React from 'react'; // Do NOT dynamically import this
import { render, screen, waitFor } from '@testing-library/react';
import { jest } from '@jest/globals';
import '@testing-library/jest-dom';

// Set up the module mock before import
jest.unstable_mockModule('../api.js', () => ({
  fetchData: jest.fn(),
}));

// Test must be async to use dynamic import after mock setup
test('displays mocked data from API', async () => {
  // Import after mock setup
  const { fetchData } = await import('../api.js');
  fetchData.mockResolvedValue('mocked data');

  const { default: DataFetcher } = await import('../components/DataFetcher.jsx');

  render(<DataFetcher />);
  
  // Avoid calling expect too early
  await waitFor(() =>
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  );

  await waitFor(() =>
    expect(screen.getByText('mocked data')).toBeInTheDocument()
  );
});