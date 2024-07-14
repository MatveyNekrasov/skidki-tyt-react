import { useParams } from 'react-router-dom';

import { getSalesList } from '@/services/sales/slice';
import { useSelector } from '@/services/store';

import { Preloader } from '@/components/ui/preloader';
import { SaleDetailsUI } from '../ui/sale-details';

export const SaleDetails = () => {
	const { id } = useParams();
	const sales = useSelector(getSalesList);
	const saleData = sales.find((sale) => sale.id === Number(id));

	if (!saleData) {
		return <Preloader />;
	}
	return <SaleDetailsUI saleData={saleData} />;
};
