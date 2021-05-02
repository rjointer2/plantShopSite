
// This is what will tie the action and 
import { createStore } from 'redux';
import plantReducer from './plant/plantReducer';

// createStore accept a reducer as it's argument
const store  = createStore(plantReducer);