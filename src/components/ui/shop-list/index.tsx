import { useEffect, useRef } from 'react';

import { TShopListUIProps } from './type';

import * as styles from './shop-list.module.scss';

import caret from '@/images/svg/icon_caret.svg';

export const ShopListUI = ({ shopsList, onShopClick }: TShopListUIProps) => {
	const detailsRef = useRef<HTMLDetailsElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				detailsRef.current &&
				!detailsRef.current.contains(event.target as Node)
			) {
				detailsRef.current.removeAttribute('open');
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<details ref={detailsRef} className={styles.shopList}>
			<summary className={styles.shopTitle}>
				<span className={styles.shopTitleText}>Магазины</span>
				<img
					src={caret}
					alt='Графический элемент, указывающий на возможность раскрытия списка'
					className={styles.shopTitleArrow}
				/>
			</summary>
			<ul className={styles.shopMenu}>
				{shopsList.map((shop) => (
					<li key={shop.id} className={styles.shopItem}>
						<button
							type='button'
							onClick={() => {
								onShopClick(shop.name);
								detailsRef.current!.removeAttribute('open');
							}}
							className={styles.shopButton}
						>
							<p className={styles.shopText}>{shop.name}</p>
							<img
								src={shop.image}
								alt='Иконка магазина'
								className={styles.shopImage}
							/>
						</button>
					</li>
				))}
			</ul>
		</details>
	);
};
