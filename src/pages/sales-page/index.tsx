import { Preloader } from '@/components/ui/preloader';

import { getLoading } from '@/services/sales/slice';
import { useSelector } from '@/services/store';

import * as styles from './sales-page.module.scss';
import { SalesList } from '@/components/sales-list';

export const SalesPage = () => {
	const isSalesLoading = useSelector(getLoading);
	return (
		<>
			{isSalesLoading ? (
				<Preloader />
			) : (
				<main className={styles.main}>
					<SalesList />
				</main>
			)}
		</>
	);
};
