import { useNavigate } from 'react-router-dom';

import { getShopsList } from '@/services/shops/slice';
import { useSelector } from '@/services/store';

import { ShopListUI } from '@/components/ui/shop-list';

export const ShopList = () => {
	const shopsList = useSelector(getShopsList);
	const navigate = useNavigate();

	const handleShopClick = (shopName: string) => {
		navigate(`/?shop=${encodeURIComponent(shopName)}`);
	};
	return <ShopListUI shopsList={shopsList} onShopClick={handleShopClick} />;
};
