import { createSlice } from '@reduxjs/toolkit';
import createCar from '../requests/createCar';
import getCars from '../requests/getCars';
import deleteCar from '../requests/deleteCar';

const initialState = {
  cars: [],
  loading: false,
  error: null,
  deleting: false,
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    toggleDeleting: (state) => {
      state.deleting = !state.deleting;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createCar.fulfilled, (state) => ({
      ...state,
      loading: false,
    }));
    builder.addCase(getCars.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      cars: action.payload,
    }));
    builder.addCase(deleteCar.fulfilled, (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
      state.loading = false;
    });
  },
});

export const { toggleDeleting } = carSlice.actions;

export default carSlice.reducer;
