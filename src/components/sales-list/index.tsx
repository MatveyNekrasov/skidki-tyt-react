import { SalesListUI } from '@/components/ui/sales-list';

import {
	getFilteredSales,
	getSalesList,
	getSearchedSales,
} from '@/services/sales/slice';
import { useSelector } from '@/services/store';

export const SalesList = () => {
	const sales = useSelector(getSalesList);
	const searchSales = useSelector(getSearchedSales);
	const filterSales = useSelector(getFilteredSales);

	if (searchSales.length > 0) return <SalesListUI sales={searchSales} />;

	if (filterSales.length > 0) return <SalesListUI sales={filterSales} />;

	return <SalesListUI sales={sales} />;
};
