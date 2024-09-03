import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { filterSalesByShop } from '@/services/sales/actions';
import { getShopsList } from '@/services/shops/slice';
import { useDispatch, useSelector } from '@/services/store';
import { clearFilteredSales, getFilteredSales } from '@/services/sales/slice';

const useFilter = () => {
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	const shopParam = searchParams.get('shop');
	const shops = useSelector(getShopsList);
	const filteredSales = useSelector(getFilteredSales);

	useEffect(() => {
		if (shopParam) {
			const shop = shops.find((shop) => shop.name === shopParam);
			if (shop) {
				dispatch(filterSalesByShop(shop.id));
			}
		} else if (filteredSales.length !== 0) {
			dispatch(clearFilteredSales());
		}
	}, [shopParam, dispatch, shops, filteredSales.length]);

	return shopParam;
};

export default useFilter;
