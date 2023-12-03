import { createSlice } from '@reduxjs/toolkit';

interface mathState {
  value: string;
}

const initialState: mathState = {
  value: '',
};

export const mathSlice = createSlice({
  name: 'mathExpression',
  initialState,
  reducers: {
    addExpression: (state, { payload }) => {
      state.value = payload;
    },

    resetExpressoin: (state) => {
      state.value = '';
    },
  },
});

export const { addExpression, resetExpressoin } = mathSlice.actions;

export default mathSlice.reducer;
