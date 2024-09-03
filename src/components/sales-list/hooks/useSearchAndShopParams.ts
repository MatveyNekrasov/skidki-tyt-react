import { useSearchParams } from 'react-router-dom';

export const useSearchAndShopParams = () => {
	const [searchParams] = useSearchParams();
	const searchTerm = searchParams.get('search');
	const shopName = searchParams.get('shop');

	return [searchTerm, shopName];
};
