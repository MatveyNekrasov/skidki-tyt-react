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

export type TAnalyticItem = {
	user_id: number;
	session_id: string;
	source_url: string;
	url: string;
	referer: string;
	user_agent: string;
	ip: string;
	method: string;
	status_code: number;
	response_time: number;
	created_at: string;
};
