import { useEffect, useState } from 'react';

import { SimilarProductsListUI } from '@/components/ui/similar-products-list';

import { TSale } from '@/utils/types';
import { getSimilarProductsApi } from '@/utils/api';

export const SimilarProductsList = () => {
	const [similarProducts, setSimilarProducts] = useState<TSale[]>([]);

	useEffect(() => {
		getSimilarProductsApi()
			.then((products) => {
				setSimilarProducts(products);
			})
			.catch((error) => {
				console.error('Error fetching similar products:', error);
			});
	}, []);

	return <SimilarProductsListUI products={similarProducts} />;
};
