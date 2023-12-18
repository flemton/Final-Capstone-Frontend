import { createAsyncThunk } from '@reduxjs/toolkit';
import apiUrl from '../../misc/apiUrl';

const deleteCar = createAsyncThunk('car/delete', async (carId, { rejectWithValue }) => {
  try {
    const response = await fetch(`${apiUrl}tesla_models/${carId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Server error on delete');
    }
    return carId;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export default deleteCar;
