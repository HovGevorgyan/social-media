import React from 'react'
import { connect } from 'react-redux'
import '../styles/Users.css'
import {actions} from '../redux/store';

const mapState = (state) => ({
    counter: state.counter
});

const mapDispatch = {
    decrement: () => (actions.setDecrement('DECREMENT')),
    increment: () => (actions.setIncrement('INCREMENT'))
};

const connector = connect(
    mapState,
    mapDispatch
);

const Test = (props) => {
    return (
        <>
            <div>{props.counter}</div>
            <button onClick={()=> props.increment()}>Increment</button>
            <button onClick={()=> props.decrement()}>Decrement</button>
        </>
    )
};

export default connector(Test);
