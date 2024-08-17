import { TSimilarProductUIProps } from './type';

import * as styles from './similar-product.module.scss';
import { Link } from 'react-router-dom';

export const SimilarProductUI = ({ product }: TSimilarProductUIProps) => {
	return (
		<li>
			<Link to={`/sale/${product.id}`}>
				<article className={styles.card}>
					<img
						src={product.image}
						alt='Изображение похожего товара'
						className={styles.image}
					/>
					<div className={styles.prices}>
						<p className={styles.salePrice}>{`${product.price} ₽`}</p>
						<p className={styles.price}>{`${product.salePrice} ₽`}</p>
						<p className={styles.sale}>{`${product.priceOffPercent}%`}</p>
					</div>
					<p className={styles.text}>{product.shortName}</p>
				</article>
			</Link>
		</li>
	);
};
