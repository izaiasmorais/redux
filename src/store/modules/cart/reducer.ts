import produce from "immer";
import { Reducer } from "redux";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
	items: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case "ADD_PRODUCT_TO_CART": {
				const { product } = action.payload;

				const productIndex = draft.items.findIndex(
					(i) => i.product.id === product.id
				);

				if (productIndex >= 0) {
					draft.items[productIndex].quantity++;
				} else {
					draft.items.push({
						product,
						quantity: 1,
					});
				}

				break;
			}

			default: {
				return draft;
			}
		}
	});
};

export default cart;
