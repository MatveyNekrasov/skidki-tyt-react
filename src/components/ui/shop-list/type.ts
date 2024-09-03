import { TShop } from '@/utils/types';

export type TShopListUIProps = {
	shopsList: TShop[];
	onShopClick: (shopName: string) => void;
};
