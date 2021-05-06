
import * as actionTypes from '../constants/cartConstants';

// Takes the item id and returns a async function with a dispatch function as it argument 
export const addToCart = (id) => async(dispatch) => {
    const data = fetch(`/api/products/${id}`)
    const 

}