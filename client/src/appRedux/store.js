
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// It will call every child reducer, and gather their results into a single state object, 
// whose keys correspond to the keys of the passed reducer functions.
const reducer = combineReducers({

})

// helping us make async actions
const middleware = [thunk];

// Our Store which hold our states
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;