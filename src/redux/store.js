import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './slices/registerSlice';
import loginReducer from './slices/loginSlice';
import carReducer from './slices/carSlice';

const store = configureStore({
  reducer: {
    // Here we will be adding reducers.
    register: registerReducer,
    login: loginReducer,
    car: carReducer,
  },
});

export default store;
