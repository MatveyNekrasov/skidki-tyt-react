import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SearchHandler } from '@/components/search-handler';
import { SaleDetails } from '@/pages/sale-details';

import { useDispatch } from '@/services/store';
import { getSales } from '@/services/sales/actions';

import * as styles from './app.module.scss';

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSales());
	}, [dispatch]);

	return (
		<div className={styles.page}>
			<Header />
			<Routes>
				<Route path='/' element={<SearchHandler />} />
				<Route path='/sale/:id' element={<SaleDetails />} />
			</Routes>
			<Footer />
		</div>
	);
};
