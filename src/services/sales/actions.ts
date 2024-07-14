import { getSalesApi } from '@/utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getSales = createAsyncThunk('sales/getAll', async () => {
	const res = await getSalesApi();
	console.log(res);
	return res;
});
