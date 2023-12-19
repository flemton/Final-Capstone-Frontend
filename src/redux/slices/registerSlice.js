import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiUrl from '../../misc/apiUrl';

export const registerAsync = createAsyncThunk(
  'register/registerAsync',
  async ({ username }) => {
    const response = await fetch(`${apiUrl}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
        },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    const errorData = await response.json();
    throw new Error(errorData.message);
  },
);

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectRegisterData = (state) => state.register.data;
export const selectRegisterLoading = (state) => state.register.loading;
export const selectRegisterError = (state) => state.register.error;

export default registerSlice.reducer;
