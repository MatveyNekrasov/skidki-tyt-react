export type TSale = {
	id: number;
	url: string;
	price: number;
	shortName: string;
	shopName: string;
	shopImg: string;
	description: string;
	priceOffPercent: number;
	salePrice: string;
	image: string;
	feature?: string;
	category?: string;
};

export type TShop = {
	id: number;
	name: string;
	url: string;
	image: string;
	description: string;
};

export type TSuggestion = Omit<TShop, 'description'>;
