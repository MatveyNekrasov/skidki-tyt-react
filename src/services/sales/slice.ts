import { createSlice } from '@reduxjs/toolkit';
import { TSale } from '@/utils/types';

import { getSales, getSearchSales } from '@/services/sales/actions';

interface TSalesState {
	sales: TSale[];
	searchSales: TSale[];
	isLoading: boolean;
	error: string | undefined;
}

const initialState: TSalesState = {
	sales: [],
	searchSales: [],
	isLoading: false,
	error: undefined,
};

export const salesSlice = createSlice({
	name: 'sales',
	initialState,
	reducers: {
		clearSearchedSales: (state) => {
			state.searchSales = [];
		},
	},
	selectors: {
		getSalesList: (state) => state.sales,
		getSearchedSales: (state) => state.searchSales,
		getLoading: (state) => state.isLoading,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getSales.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(getSales.rejected, (state, action) => {
				state.error = action.error.message;
				state.isLoading = false;
			})
			.addCase(getSales.fulfilled, (state, action) => {
				state.sales = action.payload;
				state.isLoading = false;
			})
			.addCase(getSearchSales.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(getSearchSales.rejected, (state, action) => {
				state.error = action.error.message;
				state.isLoading = false;
			})
			.addCase(getSearchSales.fulfilled, (state, action) => {
				state.searchSales = action.payload;
				state.isLoading = false;
			});
	},
});

export const { getLoading, getSalesList, getSearchedSales } =
	salesSlice.selectors;
export const { clearSearchedSales } = salesSlice.actions;
