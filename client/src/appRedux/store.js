
import { createStore } from 'redux';
// To see the state of the entire application
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools());

export default store;