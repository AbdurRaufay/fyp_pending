import { ADD_TO_CART } from "../Consents/addToCartConsents";
import axios from "axios";
export const addToCartAction =
	(id, quantity) => async (dispatch, getState) => {
		const { data } = await axios.get(`/api/product/${id}`);
		dispatch({
			type: ADD_TO_CART,
			payload: {
				id: data.product._id,
				name: data.product.name,
				price: data.product.price,
				image: data.product.images[0].url,
				stock: data.product.stock,
				quantity: quantity,
			},
		});
		localStorage.setItem(
			"cartItems",
			JSON.stringify(getState().cart.cartItems)
		);
	};
// hwo are you
