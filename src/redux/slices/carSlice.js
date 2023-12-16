import { createSlice } from '@reduxjs/toolkit';
import createCar from '../requests/createCar';
import getCars from '../requests/getCars';

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
    builder.addCase(getCars.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      cars: action.payload,
    }));
  },
});

export default carSlice.reducer;
