import * as styles from './sort-button.module.scss';

import iconSortDown from '@/images/svg/icon_sort_down.svg';

export const SortButtonUI = () => {
	return (
		<button className={styles.sortButton} type='button'>
			<img
				src={iconSortDown}
				alt='Иконка сортировки'
				className='header__menu-sort-icon'
				aria-hidden='true'
			/>
			Сортировка
		</button>
	);
};
