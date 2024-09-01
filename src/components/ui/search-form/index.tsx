import * as styles from './search-form.module.scss';
import { TSearchFormUIProps } from './type';

export const SearchFormUI = ({
	searchTerm,
	handleInputChange,
	handleSubmit,
}: TSearchFormUIProps) => {
	return (
		<form action='' className={styles.searchForm} onSubmit={handleSubmit}>
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
