import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '@/components/header';
import { SalesPage } from '@/pages/sales-page';

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
				<Route path='/' element={<SalesPage />} />
			</Routes>
		</div>
	);
};
