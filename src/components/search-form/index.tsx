import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchFormUI } from '@/components/ui/search-form';

export const SearchForm = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newSearchTerm = event.target.value;
		setSearchTerm(newSearchTerm);

		if (newSearchTerm) {
			setSearchParams({ search: newSearchTerm });
		} else {
			setSearchParams({});
		}
	};

	useEffect(() => {
		const searchParam = searchParams.get('search');

		if (searchParam !== searchTerm) {
			setSearchTerm(searchParam || '');
		}
	}, [searchParams, searchTerm]);

	return (
		<SearchFormUI
			searchTerm={searchParams.get('search') || searchTerm}
			handleInputChange={handleInputChange}
		/>
	);
};
