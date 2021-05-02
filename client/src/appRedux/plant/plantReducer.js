
// The action is import from plantType js file
import { BUY_PLANT } from './plantTypes'

// setting up our reducer, which is a function that accepts a state and action as it arguments

const initialState = {
    // Hard coding for now
    // will have this value 
    numofPlants: 10
}

// reducer will return a new state from it's initial State and the action described

const plantReducer = ( state = initialState, action ) => {
    // The switch statement used to remove one plant item if the case is present
    switch(action.type) {
        // if this case is present we will return a new object
        case BUY_PLANT: return {
            // we are copying the value of the state rather than directly mutating it 
            // and decrememt once
            ...state,
            numofPlants: state.numofPlants - 1
        }
    }
}

export default plantReducer;