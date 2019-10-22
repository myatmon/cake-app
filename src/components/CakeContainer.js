import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

//the state from redux store component pros
//Selector return from redux store state
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

//create action index and import it
//the action index will export redux action
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
