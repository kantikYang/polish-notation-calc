import { createSlice } from '@reduxjs/toolkit';

interface mathState {
  value: string;
  rpn: string;
}

const initialState: mathState = {
  value: '',
  rpn: '',
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

    addRpn: (state, { payload }) => {
      state.rpn = payload;
    },
  },
});

export const { addExpression, resetExpressoin, addRpn } = mathSlice.actions;

export default mathSlice.reducer;
