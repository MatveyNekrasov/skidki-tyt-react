import similarImage from '@/images/similar.png';
import * as styles from './similar-product.module.scss';

export const SimilarProductUI = () => {
	return (
		<li>
			<article className={styles.card}>
				<img
					src={similarImage}
					alt='Изображение похожего товара'
					className={styles.image}
				/>
				<div className={styles.prices}>
					<p className={styles.salePrice}>20 000 ₽</p>
					<p className={styles.price}>30 000 ₽</p>
					<p className={styles.sale}>90%</p>
				</div>
				<p className={styles.text}>Супер маска брокколи для хорошего сна</p>
			</article>
		</li>
	);
};
