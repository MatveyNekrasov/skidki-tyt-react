import { useNavigate } from 'react-router-dom';

import { filterSalesByShop } from '@/services/sales/actions';
import { getShopsList } from '@/services/shops/slice';
import { useDispatch, useSelector } from '@/services/store';

import { ShopListUI } from '@/components/ui/shop-list';

export const ShopList = () => {
	const shopsList = useSelector(getShopsList);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleShopClick = (shopId: number, shopName: string) => {
		dispatch(filterSalesByShop(shopId));
		navigate(`/?shop=${encodeURIComponent(shopName)}`);
	};
	return <ShopListUI shopsList={shopsList} onShopClick={handleShopClick} />;
};
