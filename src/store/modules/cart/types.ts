export interface IProduct {
	id: number;
	title: number;
	price: number;
}

export interface ICartItem {
	product: IProduct;
	quantity: number;
}

export interface ICartState {
	items: ICartItem[];
}
