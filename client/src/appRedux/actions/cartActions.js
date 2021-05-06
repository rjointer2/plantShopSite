
import * as actionTypes from '../constants/cartConstants';

// Takes the item id and returns a async function with a dispatch function as it argument 
export const addToCart = (id) => async(dispatch) => {
    // dispatch is only way to trigger a state change in redux

    const res = await fetch(`/api/products/${id}`)
    const data = await res.json();

    dispatch({
        // set the actions type to describle the action
        type: actionTypes.ADD_TO_CART,
        // What is the load of this action
        payload: {
            product: data.id,
            name: data.name,
            image: data.
        }
    })

}