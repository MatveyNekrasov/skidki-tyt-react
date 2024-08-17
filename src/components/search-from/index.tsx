import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDebounce } from '@/utils/hooks/use-debounced-state';

import { SearchFormUI } from '@/components/ui/search-form';
import { searchSalesApi } from '@/utils/api';

export const SearchForm = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const search = searchParams.get('search');
		if (search) {
			setSearchTerm(search);
		}
	}, [searchParams]);

	const fetchSearchResult = (query: string) =>
		searchSalesApi(query).then((res) => res);

	const debouncedQuery = useDebounce(fetchSearchResult, 500);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newSearchTerm = event.target.value;
		setSearchTerm(newSearchTerm);
		debouncedQuery(newSearchTerm);
		setSearchParams({ search: newSearchTerm });
	};

	return (
		<SearchFormUI
			searchTerm={searchParams.get('search') || searchTerm}
			handleInputChange={handleInputChange}
		/>
	);
};
