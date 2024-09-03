import { useSelector } from '@/services/store';
import {
	getFilteredSales,
	getSalesList,
	getSearchedSales,
} from '@/services/sales/slice';
import { useSearchAndShopParams } from './useSearchAndShopParams';

export const useCurrentSales = () => {
	const sales = useSelector(getSalesList);
	const searchSales = useSelector(getSearchedSales);
	const filterSales = useSelector(getFilteredSales);
	const [searchTerm, shopName] = useSearchAndShopParams();

	let currentFilter = '';
	let currentSales = sales;

	if (searchTerm) {
		currentFilter = 'search';
		currentSales = searchSales.length > 0 ? searchSales : [];
	} else if (shopName) {
		currentFilter = 'shop';
		currentSales = filterSales.length > 0 ? filterSales : [];
	}

	return { currentSales, currentFilter };
};
