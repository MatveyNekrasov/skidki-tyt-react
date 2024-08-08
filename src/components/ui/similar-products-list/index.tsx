import { SimilarProductUI } from '../similar-product';
import * as styles from './similar-products-list.module.scss';

export const SimilarProductsListUI = () => {
	const similarProducts = Array.from({ length: 6 }, (_, i) => i);

	return (
		<section
			className={`${styles.similarProducts} ${styles.contentSection}`} /* 'similar-products content-section' */
		>
			<h2 className={styles.title}>Похожие товары</h2>
			<ul className={styles.list}>
				{similarProducts.map((index) => (
					<SimilarProductUI key={index} />
				))}
			</ul>
		</section>
	);
};
