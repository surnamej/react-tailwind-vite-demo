import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk — simulates a delayed increment
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(amount), 500);
    });
  }
);

const initialState = {
  value: 0,
  status: 'idle',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.value += action.payload;
        state.status = 'idle';
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export const selectCounterValue = (state) => state.counter.value;
export default counterSlice.reducer;
