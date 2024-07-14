import * as styles from './menu-list.module.scss';

import fireIcon from '@/images/svg/icon_fire.svg';

export const MenuListUI = () => {
	return (
		<ul className={styles.menuList}>
			<li className={styles.menuItem}>
				Хит
				<img
					src={fireIcon}
					alt='Иконка пламени'
					className={styles.menuIcon}
					aria-hidden='true'
				/>
			</li>
			<li className={styles.menuItem}>Новинки</li>
		</ul>
	);
};
