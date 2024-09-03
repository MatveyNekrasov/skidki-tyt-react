import { SalesPage } from '@/pages/sales-page';
import useSearch from './hooks/useSearch';
import useFilter from './hooks/useFilter';

export const UrlHandler = () => {
	useSearch();
	useFilter();

	return <SalesPage />;
};
