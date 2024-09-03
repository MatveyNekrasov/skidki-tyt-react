import { TSale } from '@/utils/types';

export type TSalesListUIProps = {
	sales: TSale[];
	currentFilter: string;
	searchTerm: string;
	shopName: string;
	isLoading: boolean;
};
