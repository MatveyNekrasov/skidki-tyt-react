import { TSalesListUIProps } from './type';

import * as styles from './sales-list.module.scss';
import { Sale } from '@/components/sale';

export const SalesListUI = ({ sales }: TSalesListUIProps) => {
	return (
		<ul className={styles.salesList}>
			{sales.map((sale) => (
				<Sale key={sale.id} sale={sale} />
			))}
		</ul>
	);
};
