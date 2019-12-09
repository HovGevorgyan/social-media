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
    // console.log(props, ‘props_________________________________‘)
    // const users =[‘User 1’, ‘User 2’, ‘User 3’, ‘User 4’, ‘User 5’, ‘User 6’, ‘User 7’, ‘User 8’, ‘User 9 ’, ‘User 10’];
    //
    // const renderUsers = arr => {
    //     return(
    //         arr.map((elem) => {return <Item
    //             value={elem}
    //             onClick={() => {console.log(elem)}}
    //         />})
    //     )
    // };
    //
    // return(
    //     <>
    //         <div className=‘Users’>
    //             <h2 onClick={() => console.log(1)}>Users</h2>
    //             {renderUsers(users)}
    //         </div>
    //     </>
    // )
    return (
        <>
            <div>{props.counter}</div>
            <button onClick={()=> props.increment()}>Increment</button>
            <button onClick={()=> props.decrement()}>Decrement</button>
        </>
    )
};

export default connector(Test);
