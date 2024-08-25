import { getShopsListApi } from '@/utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getShops = createAsyncThunk('shops/getAll', async () => {
	const res = await getShopsListApi();
	return res;
});
