import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { UrlHandler } from '@/components/url-handler';
import { MarketingForm } from '@/components/marketing-form';
import { SaleDetails } from '@/pages/sale-details';
import { NotFoundPageUI } from '@/components/ui/pages/not-found-page';
import { AnalyticsChart } from '@/components/analytics-chart';

import { useDispatch } from '@/services/store';
import { getSales } from '@/services/sales/actions';
import { getShops } from '@/services/shops/actions';

import * as styles from './app.module.scss';

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSales());
		dispatch(getShops());
	}, [dispatch]);

	return (
		<div className={styles.page}>
			<Header />
			<Routes>
				<Route path='/' element={<UrlHandler />} />
				<Route path='/sale/:id' element={<SaleDetails />} />
				<Route path='/marketing' element={<MarketingForm />} />
				<Route path='/analytics' element={<AnalyticsChart />} />
				<Route path='*' element={<NotFoundPageUI />} />
			</Routes>
			<Footer />
		</div>
	);
};
