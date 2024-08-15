import { TSale } from '@/utils/types';
import { BASE_URL, mockSalesListUrl } from './constants';

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
