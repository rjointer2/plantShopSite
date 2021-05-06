
import * as actionTypes from '../constants/cartConstants';

// This will specifies as the store and action's of the cart tie together
export const cartReducer = ( state = { cartItems: [] }, action ) => {
 
    switch(action.type) {
        // if the action type is the following ADD_TO_C ART
        case actionTypes.ADD_TO_CART: 
            // item is set action payload
            // Our payload is the product's object
            const item = action.payload;

            // Using find, we will get the state's cartItem Iteration and compare it 
            // to the item's prodect object
            // In our cartAction's the product property is the product's id
            const existingItem = state.cartItem.find((i) => i.product === item.product);

            if(existingItem) {
                return {
                    ...state,
                    // if the item exist we will spread the state's array ( castItem )
                    // then check if the state's cartItem iteration has the existing product and 
                    // return's it as the property of cartItem
                    cartItem: state.cartItem.map(i => i.product === existingItem.product ? item: i)
                } 
            } else {
                return {
                    ...state,
                    // if it's the first the item is added
                    // or push in the state properties and add the item in the cartItem Array
                    cartItems: [...state.cartItem, item]
                }
            }

        // removes from cart
        case actionTypes.REMOVE_FROM_CART: 
            return {
                ...state,
                cartItem: state.cartItems.filter((i) => i.product !== action.payload)
            }


        default: 
        // a empty cart
        return state;
    }
};