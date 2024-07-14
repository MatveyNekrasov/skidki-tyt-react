import * as styles from './search-form.module.scss';

export const SearchFormUI = () => {
	return (
		<form action='' className={styles.searchForm}>
			<input
				type='search'
				className={styles.searchField}
				placeholder='Поиск на сайте...'
			/>
		</form>
	);
};
