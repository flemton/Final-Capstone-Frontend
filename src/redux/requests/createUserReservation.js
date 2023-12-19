import { createAsyncThunk } from '@reduxjs/toolkit';
import apiUrl from '../../misc/apiUrl';

const createUserReservation = createAsyncThunk(
  'reservations/addReservation',
  async (data, { rejectWithValue }) => {
    const { reservationData, selectedCar } = data;
    try {
      const response = await fetch(`${apiUrl}tesla_models/${selectedCar.id}/reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      return rejectWithValue({ error: 'An error occurred' });
    }
  },
);

export default createUserReservation;
