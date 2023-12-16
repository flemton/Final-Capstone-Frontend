import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './slices/registerSlice';
import loginReducer from './slices/loginSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    // Here we will be adding reducers.
    register: registerReducer,
    login: loginReducer,
    user: userReducer,
  },
});

export default store;
