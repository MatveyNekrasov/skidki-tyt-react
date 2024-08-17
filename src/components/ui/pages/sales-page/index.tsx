import { SalesList } from '@/components/sales-list';
import { Preloader } from '@/components/ui/preloader';

import { TSalesPageUIProps } from './type';

import * as styles from './sales-pages.module.scss';

export const SalesPageUI = ({ isSalesLoading }: TSalesPageUIProps) => {
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
