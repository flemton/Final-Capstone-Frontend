import { createAsyncThunk } from '@reduxjs/toolkit';
import apiUrl from '../../misc/apiUrl';

const getCars = createAsyncThunk('cars', async () => {
  const response = await fetch(`${apiUrl}/tesla_models`);
  const data = await response.json();
  return data;
});

export default getCars;
