// src/features/counter/counterSlice.test.js
import reducer, { increment, decrement } from '../features/counter/counterSlice';

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual({ value: 0, status: 'idle' });
  });

  it('should handle increment', () => {
    const nextState = reducer({ value: 0 }, increment());
    expect(nextState.value).toBe(1);
  });

  it('should handle decrement', () => {
    const nextState = reducer({ value: 1 }, decrement());
    expect(nextState.value).toBe(0);
  });
});
