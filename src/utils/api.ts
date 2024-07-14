import { TSale } from '@/utils/types';

const checkResponse = <T>(res: Response): Promise<T> =>
	res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

const mockSalesUrl = '/mockSales.json';

export const getSalesApi = () =>
	fetch(mockSalesUrl)
		.then((res) => checkResponse<TSale[]>(res))
		.then((data) => data);
