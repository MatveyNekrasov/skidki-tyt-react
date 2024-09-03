import { TSalesListUIProps } from './type';

import * as styles from './sales-list.module.scss';
import { Sale } from '@/components/sale';
import { Link } from 'react-router-dom';
import { Preloader } from '../preloader';

export const SalesListUI = ({
	sales,
	currentFilter,
	searchTerm,
	shopName,
	isLoading,
}: TSalesListUIProps) => {
	if (isLoading) return <Preloader />;

	return (
		<>
			{currentFilter === 'search' && (
				<h2 className={styles.heading}>
					Предложения по запросу &quot;{searchTerm}&quot;
				</h2>
			)}
			{currentFilter === 'shop' && (
				<h2 className={styles.heading}>
					Предложения магазина &quot;{shopName}&quot;
				</h2>
			)}

			{sales.length === 0 ? (
				<>
					{currentFilter === 'search' && (
						<p>Предложения по запросу {searchTerm} не найдены</p>
					)}
					{currentFilter === 'shop' && (
						<p>Предложения от магазина {shopName} не найдены</p>
					)}
					<Link to='/'>Вернуться на главную страницу</Link>
				</>
			) : (
				<ul className={styles.salesList}>
					{sales.map((sale) => (
						<Sale key={sale.id} sale={sale} />
					))}
				</ul>
			)}
		</>
	);
};
