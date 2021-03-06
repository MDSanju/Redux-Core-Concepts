import jsonPlaceholderApi from "../../apis/jsonPlaceholderApi";
import { ActionTypes } from "../contants/action-types"

export const fetchProducts = () => async(dispatch) => {
    const response = await jsonPlaceholderApi.get("/users");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async(dispatch) => {
    const response = await jsonPlaceholderApi.get(`/users/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}