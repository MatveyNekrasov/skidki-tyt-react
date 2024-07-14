import { createSlice } from '@reduxjs/toolkit';
import { TSale } from '@/utils/types';
import { getSales } from '@/services/sales/actions';

interface TSalesState {
	sales: TSale[];
	isLoading: boolean;
	error: string | undefined;
}

const initialState: TSalesState = {
	sales: [],
	isLoading: false,
	error: undefined,
};

export const salesSlice = createSlice({
	name: 'sales',
	initialState,
	reducers: {},
	selectors: {
		getSalesList: (state) => state.sales,
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
			});
	},
});

export const { getLoading, getSalesList } = salesSlice.selectors;
