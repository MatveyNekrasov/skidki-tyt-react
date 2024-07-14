import * as styles from './shop-list.module.scss';

import caret from '../../../images/svg/icon_caret.svg';
import shopImage from '../../../images/shop_list.png';

export const ShopListUI = () => {
	return (
		<details className={styles.shopList}>
			<summary className={styles.shopTitle}>
				<span className={styles.shopTitleText}>Магазины</span>
				<img
					src={caret}
					alt='Графический элемент, указывающий на возможность раскрытия списка'
					className={styles.shopTitleArrow}
				/>
			</summary>
			<ul className={styles.shopMenu}>
				<li className={styles.shopItem}>
					<p className={styles.shopText}>Магазин “Товары для пушистиков”</p>
					<img
						src={shopImage}
						alt='Иконка магазина'
						className={styles.shopImage}
					/>
				</li>
				<li className={styles.shopItem}>
					<p className={styles.shopText}>Магазин “Товары для пушистиков”</p>
					<img
						src={shopImage}
						alt='Иконка магазина'
						className={styles.shopImage}
					/>
				</li>
				<li className={styles.shopItem}>
					<p className={styles.shopText}>Магазин “Товары для пушистиков”</p>
					<img
						src={shopImage}
						alt='Иконка магазина'
						className={styles.shopImage}
					/>
				</li>
			</ul>
		</details>
	);
};
