import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './slices/registerSlice';

const store = configureStore({
  reducer: {
    // Here we will be adding reducers.
    register: registerReducer,
  },
});

export default store;
