import { createSlice } from '@reduxjs/toolkit';

interface mathState {
  mathString: string;
}

const initialState: mathState = {
  mathString: '',
};

export const mathSlice = createSlice({
  name: 'mathStr',
  initialState,
  reducers: {
    addExpression: (state, { payload }) => {
      state.mathString = payload;
    },

    resetExpressoin: (state) => {
      state.mathString = '';
    },
  },
});

export const { addExpression, resetExpressoin } = mathSlice.actions;

export default mathSlice.reducer;
