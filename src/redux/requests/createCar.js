import { createAsyncThunk } from '@reduxjs/toolkit';
import apiUrl from '../../misc/apiUrl';

const createCar = createAsyncThunk('car/add', async (formData) => {
  const teslaData = new FormData();
  teslaData.append('tesla_model[name]', formData.name);
  teslaData.append('tesla_model[description]', formData.description);
  teslaData.append('tesla_model[deposit]', formData.deposit);
  teslaData.append('tesla_model[finance_fee]', formData.finance_fee);
  teslaData.append('tesla_model[option_to_purchase_fee]', formData.option_to_purchase_fee);
  teslaData.append('tesla_model[total_amount_payable]', formData.total_amount_payable);
  teslaData.append('tesla_model[duration]', formData.duration);
  teslaData.append('tesla_model[removed]', formData.removed);
  teslaData.append('tesla_model[image]', formData.image);
  const response = await fetch(`${apiUrl}/tesla_models`, {
    method: 'POST',
    body: teslaData,
  });
  const data = await response.json();
  return data;
});

export default createCar;
