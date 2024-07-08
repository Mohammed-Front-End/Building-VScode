import { configureStore } from '@reduxjs/toolkit';
import fileTreeReducer from './features/fileTreeSlice';

export const store = configureStore({
  reducer: {
    tree: fileTreeReducer,
  },  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
