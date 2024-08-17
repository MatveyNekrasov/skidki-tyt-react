import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type TScrollBehavior = 'auto' | 'instant' | 'smooth';

export const useScrollToTop = (scrollBehavior: TScrollBehavior) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: scrollBehavior });
	}, [pathname]);
};
