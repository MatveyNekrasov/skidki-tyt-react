import { SalesListUI } from '@/components/ui/sales-list';

import { getSalesList } from '@/services/sales/slice';
import { useSelector } from '@/services/store';

export const SalesList = () => {
	const sales = useSelector(getSalesList);
	return <SalesListUI sales={sales} />;
};
