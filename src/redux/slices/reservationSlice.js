import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getUserReservations from '../requests/getUserReservations';

export const deleteReservation = createAsyncThunk(
  'reservation/deleteReservation',
  async (reservationId) => {
    const response = await fetch(`http://localhost:3000/api/reservations/${reservationId}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    return reservationId;
  },
);

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    reservations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserReservations.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(getUserReservations.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        reservations: action.payload,
      }))
      .addCase(getUserReservations.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }))
      .addCase(deleteReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.reservations = state.reservations.filter(
          (reservation) => reservation.reservation.id !== action.payload,
        );
      })
      .addCase(deleteReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectUserReservations = (state) => state.reservation.reservations;
export const selectReservationLoading = (state) => state.reservation.loading;
export const selectReservationError = (state) => state.reservation.error;

export default reservationSlice.reducer;
