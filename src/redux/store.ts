import { configureStore } from '@reduxjs/toolkit';
import mathReducer from './features/mathSlice';

export const store = configureStore({
  reducer: {
    mathExpression: mathReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
