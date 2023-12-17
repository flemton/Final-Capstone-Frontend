import { createAsyncThunk } from '@reduxjs/toolkit';
import apiUrl from '../../misc/apiUrl';

const getUserReservations = createAsyncThunk('reservation/getUserReservations', async () => {
  const response = await fetch(`${apiUrl}user_reservations`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  const errorData = await response.json();
  throw new Error(errorData.message);
});

export default getUserReservations;
