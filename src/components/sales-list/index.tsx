import { SalesListUI } from '@/components/ui/sales-list';

import { getSalesList, getSearchedSales } from '@/services/sales/slice';
import { useSelector } from '@/services/store';

export const SalesList = () => {
	const sales = useSelector(getSalesList);
	const searchSales = useSelector(getSearchedSales);

	return searchSales.length ? (
		<SalesListUI sales={searchSales} />
	) : (
		<SalesListUI sales={sales} />
	);
};
