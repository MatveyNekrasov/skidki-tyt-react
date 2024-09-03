import { createSlice } from '@reduxjs/toolkit';
import { TSale } from '@/utils/types';

import {
	filterSalesByShop,
	getSales,
	getSearchSales,
} from '@/services/sales/actions';

interface TSalesState {
	sales: TSale[];
	searchSales: TSale[];
	filterSales: TSale[];
	isLoading: boolean;
	error: string | undefined;
}

const initialState: TSalesState = {
	sales: [],
	searchSales: [],
	filterSales: [],
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
		clearFilteredSales: (state) => {
			state.filterSales = [];
		},
	},
	selectors: {
		getSalesList: (state) => state.sales,
		getSearchedSales: (state) => state.searchSales,
		getFilteredSales: (state) => state.filterSales,
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
			})
			.addCase(filterSalesByShop.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(filterSalesByShop.rejected, (state, action) => {
				state.error = action.error.message;
				state.isLoading = false;
			})
			.addCase(filterSalesByShop.fulfilled, (state, action) => {
				state.filterSales = action.payload;
				state.isLoading = false;
			});
	},
});

export const { getLoading, getSalesList, getSearchedSales, getFilteredSales } =
	salesSlice.selectors;
export const { clearSearchedSales, clearFilteredSales } = salesSlice.actions;
