
import * as actionTypes from '../constants/cartConstants';

// This will specifies as the store and action's of the cart tie together
export const cartReducer = ( state = { cartItems: [] }, action ) => {
    // Check the action's type
    switch(action.type) {
        case actionTypes.ADD_TO_CART: 
            const item = action.payload;

            // calls predicate once for each element of the array, 
            // in ascending order, until it finds one where predicate returns true. 

            // The object's id property return the matcher 
            const existingItem = state.cartItem.find((item) => item.id === item.id);

            if(existingItem) {
                return {
                    ...state,
                    // We will set the new cartitems to an array
                    // loop through the old array and compare the potenial state
                    // to the existing compared item and if it's true then set the item's property to the potential state
                    cartItem: state.cartItem.map(i => i.id === existingItem.id ? item: i)
                } 
            } else {
                return {
                    ...state,
                    // or push in the state properties and add the item in this array
                    cartItems: [...state.cartItem, item]
                }
            }
            
        case actionTypes.REMOVE_FROM_CART: 
            return {
                ...state,
                cartItem: state.cartItems.filter((i) => i.id !== action.payload)
            }


        default: 
        // a empty cart
        return state;
    }
};