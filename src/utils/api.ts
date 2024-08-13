import { TSale } from '@/utils/types';
import { BASE_URL, mockSalesListUrl } from './constants';

const checkResponse = <T>(res: Response): Promise<T> =>
	res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getSalesApi = () =>
	fetch(`${BASE_URL}/items`).then((res) => {
		if (res.ok) {
			return checkResponse<TSale[]>(res);
		} else {
			return fetch(mockSalesListUrl).then((res) => checkResponse<TSale[]>(res));
		}
	});
