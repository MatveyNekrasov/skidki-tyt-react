import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

import { getSalesList } from '@/services/sales/slice';
import { useSelector } from '@/services/store';
import { useScrollToTop } from '@/utils/hooks/useScrollToTop';

import { Preloader } from '@/components/ui/preloader';
import { SaleDetailsUI } from '@/components/ui/pages/sale-details';

export const SaleDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const sales = useSelector(getSalesList);
	const saleData = useMemo(
		() => sales.find((sale) => sale.id === Number(id)),
		[sales, id]
	);

	useScrollToTop('smooth');

	useEffect(() => {
		if (!saleData) {
			navigate('/not-found-page');
		}
	}, [saleData, navigate]);

	if (!saleData) {
		return <Preloader />;
	}
	return <SaleDetailsUI saleData={saleData} />;
};
