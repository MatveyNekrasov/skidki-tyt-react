import { getSalesApi, searchSalesApi } from '@/utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getSales = createAsyncThunk('sales/getAll', async () => {
	const res = await getSalesApi();
	return res;
});

export const getSearchSales = createAsyncThunk(
	'sales/getSearchSales',
	async (query: string) => {
		const res = await searchSalesApi(query);
		return res;
	}
);
