import { ChangeEvent, FormEvent } from 'react';
import { TShop, TSuggestion } from '@/utils/types';

export type TMarketingFormUIProps = {
	shopsList: TShop[];
	selectedShop: string;
	suggestions: TSuggestion[];
	selectedSuggestion: string | null;
	generatedUrl: string | null;
	handleShopUpdate: (e: ChangeEvent<HTMLSelectElement>) => void;
	handleSuggestionChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: FormEvent) => void;
	isLoading: boolean;
};
