import { createAsyncThunk } from '@reduxjs/toolkit';
import apiUrl from '../../misc/apiUrl';

const getUser = createAsyncThunk('user/getCurrentUser', async () => {
  const response = await fetch(`${apiUrl}users`, {
    method: 'GET',
    credentials: 'include',
  });
  const data = await response.json();
  return data;
});

export default getUser;
