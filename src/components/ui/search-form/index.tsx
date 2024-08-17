import * as styles from './search-form.module.scss';
import { TSearchFormUIProps } from './type';

export const SearchFormUI = ({
	searchTerm,
	handleInputChange,
}: TSearchFormUIProps) => {
	return (
		<form action='' className={styles.searchForm}>
			<input
				type='search'
				className={styles.searchField}
				placeholder='Поиск на сайте...'
				value={searchTerm}
				onChange={handleInputChange}
			/>
		</form>
	);
};
