import { createSlice } from '@reduxjs/toolkit';
import createCar from '../requests/createCar';

const initialState = {
  cars: [],
  loading: false,
  error: null,
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCar.fulfilled, (state) => ({
      ...state,
      loading: false,
    }));
  },
});

export default carSlice.reducer;
