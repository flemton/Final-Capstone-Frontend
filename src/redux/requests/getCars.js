import { createAsyncThunk } from '@reduxjs/toolkit';
import apiUrl from '../../misc/apiUrl';

const getCars = createAsyncThunk('cars', async () => {
  console.log('Going...');
  const response = await fetch(`${apiUrl}/tesla_models`);
  const data = await response.json();
  console.log('Thunk', data);
  return data;
});

export default getCars;
