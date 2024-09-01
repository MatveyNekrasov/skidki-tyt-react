import { filterSalesByShopApi, getSalesApi, searchSalesApi } from '@/utils/api';
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

export const filterSalesByShop = createAsyncThunk(
	'sales/filterByShop',
	async (shopId: number) => {
		const res = await filterSalesByShopApi(shopId);
		return res;
	}
);
