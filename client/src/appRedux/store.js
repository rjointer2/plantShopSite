
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers 
import { cartReducer } from './reducers/cartReducers'
import { getProductReducer, getProductViewReducer } from './reducers/productReducers'

// It will call every child reducer, and gather their results into a single state object, 
// whose keys correspond to the keys of the passed reducer functions.
const reducer = combineReducers({
    // In the redux dev tools, the state should be visible
    cart: cartReducer,
    getProducts: getProductReducer,
    getProductView: getProductViewReducer
})

// helping us make async actions
const middleware = [thunk];

// Our Store which hold our states
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;