import { TAnalyticItem, TSale, TShop, TSuggestion } from '@/utils/types';
import {
	BASE_ANALYTICS_URL,
	BASE_URL,
	mockAnalyticsUrl,
	mockSalesListUrl,
	mockSearchSalesUrl,
	mockShopsListUrl,
	mockSuggestionsUrl,
} from './constants';

const fetchData = async <T>(url: string): Promise<T> => {
	const res = await fetch(url);
	if (res.ok) {
		return checkResponse<T>(res);
	} else {
		throw new Error(`Failed to fetch data from ${url}`);
	}
};

const checkResponse = <T>(res: Response): Promise<T> =>
	res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

const handleFetchError = (error: unknown): void => {
	if (error instanceof Error) {
		console.error('Request failed:', error);
		if (
			error instanceof TypeError &&
			error.message.includes('Failed to fetch')
		) {
			console.error('Possible CORS error:', error);
		}
	} else {
		console.error('Unknown error:', error);
	}
};

export const getSalesApi = async (): Promise<TSale[]> => {
	try {
		return await fetchData<TSale[]>(`${BASE_URL}/items`);
	} catch (error) {
		handleFetchError(error);
		return await fetchData<TSale[]>(mockSalesListUrl);
	}
};

export const searchSalesApi = async (query: string): Promise<TSale[]> => {
	try {
		return await fetchData<TSale[]>(`${BASE_URL}/search?s=${query}`);
	} catch (error) {
		handleFetchError(error);
		return await fetchData<TSale[]>(mockSearchSalesUrl);
	}
};

export const getSimilarProducts = async (): Promise<TSale[]> => {
	try {
		return await fetchData<TSale[]>(`${BASE_URL}/alike`);
	} catch (error) {
		handleFetchError(error);
		return await fetchData<TSale[]>(mockSalesListUrl);
	}
};

export const getShopsListApi = async (): Promise<TShop[]> => {
	try {
		return await fetchData<TShop[]>(`${BASE_URL}/shop`);
	} catch (error) {
		handleFetchError(error);
		return await fetchData<TShop[]>(mockShopsListUrl);
	}
};

export const getSuggestionsApi = async (): Promise<TSuggestion[]> => {
	try {
		return await fetchData<TSuggestion[]>(`${BASE_URL}/suggestions`);
	} catch (error) {
		handleFetchError(error);
		return await fetchData<TSuggestion[]>(mockSuggestionsUrl);
	}
};

export const getAnalyticItemsApi = async (): Promise<TAnalyticItem[]> => {
	try {
		return await fetchData<TAnalyticItem[]>(`${BASE_ANALYTICS_URL}`);
	} catch (error) {
		handleFetchError(error);
		return await fetchData<TAnalyticItem[]>(mockAnalyticsUrl);
	}
};
