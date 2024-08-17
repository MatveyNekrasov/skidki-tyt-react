import { SimilarProduct } from '@/components/similar-product';
import * as styles from './similar-products-list.module.scss';
import { TSimilarProductsListProps } from './type';

export const SimilarProductsListUI = ({
	products,
}: TSimilarProductsListProps) => {
	return (
		<section
			className={`${styles.similarProducts}`} /* 'similar-products content-section' */
		>
			<h2 className={styles.title}>Похожие товары</h2>
			<ul className={styles.list}>
				{products.map((product, index) => (
					<SimilarProduct key={index} product={product} />
				))}
			</ul>
		</section>
	);
};
