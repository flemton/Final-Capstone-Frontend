import { createSlice } from '@reduxjs/toolkit';
import apiUrl from '../../misc/apiUrl';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = loginSlice.actions;

export const loginAsync = (username) => async (dispatch) => {
  dispatch(fetchDataStart());
  try {
    const response = await fetch(`${apiUrl}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
        },
      }),
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } else {
      dispatch(fetchDataFailure('Error logging in user'));
    }
  } catch (error) {
    dispatch(fetchDataFailure('Error logging in user'));
  }
};

export default loginSlice.reducer;
