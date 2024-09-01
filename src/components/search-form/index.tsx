import {
	ChangeEvent,
	FormEvent,
	useCallback,
	useEffect,
	useState,
} from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { SearchFormUI } from '@/components/ui/search-form';
import { useDebounce } from '@/utils/hooks/use-debounced-state';

export const SearchForm = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	useEffect(() => {
		const initialSearchTerm = searchParams.get('search') || '';
		setSearchTerm(initialSearchTerm);
	}, [searchParams]);

	const updateSearchParams = useCallback(
		(term: string) => {
			if (term) {
				setSearchParams({ search: term });
				navigate(`/?search=${term}`);
			} else {
				setSearchParams({});
			}
		},
		[navigate, setSearchParams]
	);

	const debouncedUpdateSearchParams = useDebounce(updateSearchParams, 500);

	const handleInputChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const newSearchTerm = event.target.value;
			setSearchTerm(newSearchTerm);
			debouncedUpdateSearchParams(newSearchTerm);
		},
		[debouncedUpdateSearchParams]
	);

	const handleSubmit = useCallback((event: FormEvent) => {
		event.preventDefault();
	}, []);

	return (
		<SearchFormUI
			searchTerm={searchTerm}
			handleInputChange={handleInputChange}
			handleSubmit={handleSubmit}
		/>
	);
};
