import { TSaleUIProps } from './type';

import * as styles from './sale.module.scss';
import clsx from 'clsx';

export const SaleUI = ({ sale }: TSaleUIProps) => {
	return (
		<li>
			<article className={styles.sale}>
				<div className={styles.saleImageWrapper}>
					<img
						src={sale.image}
						alt='Изображение товара'
						className={styles.saleImage}
					/>
				</div>
				<h2 className={styles.saleTitle}>{sale.shortName}</h2>
				<div className={clsx(styles.saleText, styles.minimize)}>
					{sale.description}
				</div>
				<div className={styles.salePrices}>
					<p className={styles.salePrice}>{`${sale.price} ₽`}</p>
					<p className={styles.saleFullPrice}>{`${sale.salePrice} ₽`}</p>
					<p className={styles.salePercentOff}>{`${sale.priceOffPercent} %`}</p>
				</div>
				<div className={styles.shopInfo}>
					<img
						src={sale.shopImg}
						alt={`Иконка магазина ${sale.shopName}`}
						className={styles.shopImage}
					/>
					<p className={styles.shopName}>{sale.shopName}</p>
				</div>
				<a
					href={sale.url}
					className={styles.productButton}
					target='_blank'
					rel='noreferrer'
				>
					Перейти к товару
				</a>
			</article>
		</li>
	);
};
