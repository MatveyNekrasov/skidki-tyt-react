import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchSales } from '@/services/sales/actions';
import { clearSearchedSales, getSearchedSales } from '@/services/sales/slice';
import { useDispatch, useSelector } from '@/services/store';
import { useDebounce } from '@/utils/hooks/use-debounced-state';

const useSearch = () => {
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	const searchTerm = searchParams.get('search');
	const searchedSales = useSelector(getSearchedSales);

	const fetchSearchResult = useCallback(
		(query: string) => dispatch(getSearchSales(query)),
		[dispatch]
	);

	const debouncedSearch = useDebounce(fetchSearchResult, 500);

	useEffect(() => {
		if (searchTerm) {
			debouncedSearch(searchTerm);
		} else if (searchedSales.length !== 0) {
			dispatch(clearSearchedSales());
		}
	}, [searchTerm, dispatch, debouncedSearch, searchedSales.length]);

	return searchTerm;
};

export default useSearch;
