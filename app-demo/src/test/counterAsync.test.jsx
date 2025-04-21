import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { incrementAsync } from '../features/counter/counterSlice';

describe('incrementAsync thunk', () => {
  it('should dispatch pending and fulfilled, updating state', async () => {
    const store = configureStore({ reducer: { counter: counterReducer } });

    // Before dispatch
    expect(store.getState().counter).toEqual({ value: 0, status: 'idle' });

    // Dispatch async thunk
    const result = await store.dispatch(incrementAsync(3));

    // Result should be fulfilled
    expect(result.type).toBe('counter/incrementAsync/fulfilled');

    // After dispatch
    const state = store.getState().counter;
    expect(state.value).toBe(3);
    expect(state.status).toBe('idle');
  });
});
