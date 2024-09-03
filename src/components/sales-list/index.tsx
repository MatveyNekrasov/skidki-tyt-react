import { SalesListUI } from '@/components/ui/sales-list';

import { useCurrentSales } from './hooks/useCurrentSales';
import { useSearchAndShopParams } from './hooks/useSearchAndShopParams';
import { useSelector } from '@/services/store';
import { getLoading } from '@/services/sales/slice';

export const SalesList = () => {
	const { currentSales, currentFilter } = useCurrentSales();
	const [searchTerm, shopName] = useSearchAndShopParams();
	const isLoading = useSelector(getLoading);

	return (
		<SalesListUI
			sales={currentSales}
			currentFilter={currentFilter}
			searchTerm={searchTerm || ''}
			shopName={shopName || ''}
			isLoading={isLoading}
		/>
	);
};
