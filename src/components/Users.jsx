import React from 'react'
import Item from "./Item";
import '../styles/Users.css';

const Users = (props) => {
    const users =['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6', 'User 7', 'User 8', 'User 9 ', 'User 10'];

    const renderUsers = arr => {
        return(
            arr.map((elem) => {return <Item
                value={elem}
                onClick={() => {console.log(elem)}}
            />})
        )
    };

    const showUsers = index => {
        props.setVisible(index);
    };

    return(
        <>
            <div className='Users'>
                <h2 className='section-header' onClick={() => showUsers(0)}>Users</h2>
                { props.isVisible === 0 ? renderUsers(users) : null }
            </div>
        </>
    )
};

export default Users;
