
import React from 'react';
import { connect } from 'react-redux';
import { buyPlant } from './../appRedux/';

// when we want to access the redux state in your component we define 
// the mapStateToProps function

const mapStateToProps = state => {
    return {
        // this gets the redux state as a argument and get the state properties
        numOfPlants: state.numOfPlants
    }
}

// This function gets the dispatch function as a argument and enables us to map
// action creators to the props

const mapDispatchToProps = state => {
    return {
        buyPlants: () => dispatch(buyPlants())
    }
}

function PlantContainer(props) {
    return (
        <div>
            <h2>Number of Items - { props.numOfPlants }</h2>
            <button onClick={props.numOfPlants}>Buy Item</button>
        </div>
    )
}

// connect function does what arguments specify
// the state from the redux store is mapped to our componenet props

export default connect(mapStateToProps, mapDispatchToProps)(PlantContainer);