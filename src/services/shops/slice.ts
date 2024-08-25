import { createSlice } from '@reduxjs/toolkit';
import { TShop } from '@/utils/types';

import { getShops } from './actions';

interface TShopsState {
	shopsList: TShop[];
	isLoading: boolean;
}

const initialState: TShopsState = {
	shopsList: [],
	isLoading: false,
};

export const shopsSlice = createSlice({
	name: 'shops',
	initialState,
	reducers: {},
	selectors: {
		getShopsList: (state) => state.shopsList,
		getLoading: (state) => state.isLoading,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getShops.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getShops.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getShops.fulfilled, (state, action) => {
				state.isLoading = false;
				state.shopsList = action.payload;
			});
	},
});

export const { getShopsList, getLoading } = shopsSlice.selectors;
