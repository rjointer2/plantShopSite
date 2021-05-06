
import * as actionTypes from '../constants/cartConstants';

// Takes the item id and returns a async function with a dispatch function as it argument 
// getState is from redux thunk
export const addToCart = (id) => async(dispatch, getSsate) => {
    // dispatch is only way to trigger a state change in redux

    const res = await fetch(`/api/products/${id}`)
    const data = await res.json();

    dispatch({
        // set the actions type to describle the action
        type: actionTypes.ADD_TO_CART,
        // What is the load of this action and our schema from the DB
        payload: {
            product: data.id,
            name: data.name,
            image: data.picture,
            summary: data.summary,
            price: data.price
        }
    });
    localStorage.setItem('plantCartPC', JSON.stringify(getSsate().cart.cartItems))
}

// this action isn't going to async
export const removeFromCart = () => (dispatch, getSsate) => {
    dispatchEvent({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });
    // this is recreating the cart array just to remove 1 item, but this is happening 
    // pretty quickly but reseting the cart is techincally faster
    localStorage.setItem('plantCartPC', JSON.stringify(getSsate().cart.cartItems))
}