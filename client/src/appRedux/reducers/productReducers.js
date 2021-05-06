
import *as actionTypes from '../constants/proudctConstants';

// our state will be an array and our action will describle what will happened
export const getProductReducer = ( state = { products: [] }, action ) => {
    switch(action.type) {
        // check the type of the action described
        case actionTypes.GET_PRODUCTS_REQUEST:
        return {
            // in case the action is a request we want the loading property to be set to false
            loading: true,
            products: []
        }
        case actionTypes.GET_PRODUCTS_SUCCESS: 
        return {
            // this request is successful and not loading
            loading: false,
            products: action.payload
        }
        case actionTypes.GET_PRODUCTS_REJECT: 
        return {
            // this request is successful and not loading
            loading: false,
            error: action.payload
        }
        default: 
        return state
    }
}

// view a product

export const getProductViewReducer = ( state = {product: {}}, action ) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST: 
        return {
            loading: true,
        }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS: 
        return {
            loading: false,
            product: action.payload
        }
        case actionTypes.GET_PRODUCT_DETAILS_REJECT: 
        return {
            loading: false,
            error: action.payload
        }
        case actionTypes.GET_PRODUCT_DETAILS_RESET: 
        return {
            product: {}
        }
        default: 
        return state
    } 
}