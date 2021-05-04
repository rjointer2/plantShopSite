
import * as actionTypes from './shopping-types';

// when add the item to the cart we are going to going through
// all the products and get the specific one and add it to that cart

// Right now we not keeping DRY but we can use if stmts or switch cases

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const adjustQuantity = (itemID) => {
    return {
        type: actionTypes.ADJUST_QUANTITY,
        payload: {
            id: itemID
        }
    }
}

export const viewItemData = (itemID) => {
    return {
        type: actionTypes.VIEW_ITEM_DATA,
        payload: {
            id: itemID
        }
    }
}