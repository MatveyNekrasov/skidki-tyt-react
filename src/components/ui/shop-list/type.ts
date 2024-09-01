import { TShop } from '@/utils/types';

export type TShopListUIProps = {
	shopsList: TShop[];
	onShopClick: (shopId: number, shopName: string) => void;
};
