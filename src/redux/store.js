import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './slices/registerSlice';
import loginReducer from './slices/loginSlice';
import userReducer from './slices/userSlice';
import carReducer from './slices/carSlice';
import reservationReducer from './slices/reservationSlice';

const store = configureStore({
  reducer: {
    // Here we will be adding reducers.
    register: registerReducer,
    login: loginReducer,
    user: userReducer,
    car: carReducer,
    reservation: reservationReducer,
  },
});

export default store;
