import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDispatch } from '@/services/store';
import { useDebounce } from '@/utils/hooks/use-debounced-state';
import { clearSearchedSales } from '@/services/sales/slice';
import { getSearchSales } from '@/services/sales/actions';

import { SalesPage } from '@/pages/sales-page';

export const SearchHandler = () => {
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	const searchTerm = searchParams.get('search');

	const fetchSearchResult = useCallback(
		(query: string) => dispatch(getSearchSales(query)),
		[dispatch]
	);

	const debouncedSearch = useDebounce(fetchSearchResult, 500);

	useEffect(() => {
		if (searchTerm) {
			debouncedSearch(searchTerm);
		} else {
			dispatch(clearSearchedSales());
		}
	}, [searchTerm, dispatch, debouncedSearch]);

	return <SalesPage />;
};
