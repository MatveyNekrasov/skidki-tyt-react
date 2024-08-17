import { getLoading } from '@/services/sales/slice';
import { useSelector } from '@/services/store';

import { SalesPageUI } from '@/components/ui/pages/sales-page';

export const SalesPage = () => {
	const isSalesLoading = useSelector(getLoading);
	return <SalesPageUI isSalesLoading={isSalesLoading} />;
};
