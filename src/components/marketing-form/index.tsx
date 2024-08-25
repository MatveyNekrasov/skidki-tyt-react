import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from '@/services/store';

import { MarketingFormUI } from '@/components/ui/marketing-form';

import { getShops } from '@/services/shops/actions';
import { getShopsList } from '@/services/shops/slice';
import { getSuggestionsApi } from '@/utils/api';
import { TSuggestion } from '@/utils/types';

export const MarketingForm = () => {
	const dispatch = useDispatch();
	const shopsList = useSelector(getShopsList);
	/* const isLoading = useSelector(getLoading); */

	const [selectedShop, setSelectedShop] = useState('');
	const [suggestions, setSuggestions] = useState<TSuggestion[]>([]);
	const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(
		null
	);
	const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);

	const [isLoading, setLoading] = useState(true);

	const handleShopUpdate = async (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedShop = e.target.value;
		setSelectedShop(selectedShop);

		setLoading(true);

		const suggestions = await getSuggestionsApi();
		setSuggestions(suggestions);

		setLoading(false);

		setSelectedSuggestion(null);
		setGeneratedUrl(null);
	};

	const handleSuggestionChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSelectedSuggestion(e.target.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log('Selected Shop:', selectedShop);
		console.log('Selected Suggestion:', selectedSuggestion);

		//TODO: необходимо добавить запрос к апи для генерации url
		if (selectedSuggestion) {
			const url = `https://test-url-from-api/${selectedShop}/${selectedSuggestion}-${Math.random()}`;
			setGeneratedUrl(url);
		}
	};

	useEffect(() => {
		dispatch(getShops());
	}, [dispatch]);

	useEffect(() => {
		if (shopsList.length > 0) {
			setSelectedShop(shopsList[0].name);

			const loadSuggestions = async () => {
				setLoading(true);
				const suggestions = await getSuggestionsApi();
				setSuggestions(suggestions);
				setLoading(false);
			};

			loadSuggestions();
		}
	}, [shopsList]);

	return (
		<MarketingFormUI
			shopsList={shopsList}
			selectedShop={selectedShop}
			suggestions={suggestions}
			selectedSuggestion={selectedSuggestion}
			generatedUrl={generatedUrl}
			handleShopUpdate={handleShopUpdate}
			handleSuggestionChange={handleSuggestionChange}
			handleSubmit={handleSubmit}
			isLoading={isLoading}
		/>
	);
};
