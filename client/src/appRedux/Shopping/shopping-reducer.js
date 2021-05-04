
import * as actionTypes from './shopping-types';

// This is the state initially before the items is loaded on the client side

const INITAL_STATE = {
    product: [], // { id, name, summary, price, img }
    carts: [], // holds the items
    currentItem: null,
};

const shopReducer = ( state, action ) => {
    // if this action's proptery is anything form *'s types
    switch(action.type) {
        case actionTypes.ADD_TO_CART: 
            return {};
        case actionTypes.REMOVE_FROM_CART: 
            return {};
        case actionTypes.ADJUST_QUANTITY: 
            return {};
        case actionTypes.VIEW_ITEM_DATA: 
            return {};
        // if none of the string identifiers are a case then return 
        default:
            return state;
    }
};

export default shopReducer;