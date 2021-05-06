
import * as actionTypes from '../constants/proudctConstants';

export const getProducts = () => async (dispatch) => {

    try {

        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_REQUEST
        })

        const res = await fetch(`/api/products`);
        const data = await res.json();
        console.log(data)
        console.log('test')
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch(err) {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_REJECT,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }

}

export const getProductsView = (id) => async (dispatch) => {

    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_REQUEST
    })

    try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json()
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch(err) {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_REJECT,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }

}

export const removeProductView = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET
    })
}